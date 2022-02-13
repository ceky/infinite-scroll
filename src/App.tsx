import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfiniteLoader from './components/InfiniteLoader/InfiniteLoader';
import Post from './components/Post/Post';
import User from './components/User/User';
import useFetchContent from './services/useFetchContent';
import { ContentEnum, ContentType } from './types/ContentType';

const NO_OF_NEW_ITEMS = 10;

function App() {
  const [selectedContentType, setSelectedContentType] = useState<ContentType>(
    ContentEnum.USERS
  );
  const [contentLength, setContentLength] = useState(NO_OF_NEW_ITEMS);

  const content = useFetchContent(selectedContentType);
  console.log(content);

  useEffect(() => {
    setContentLength(NO_OF_NEW_ITEMS);
  }, [selectedContentType]);

  const fetchNewEntries = useCallback(() => {
    setContentLength(contentLength + NO_OF_NEW_ITEMS);
  }, [contentLength]);

  return (
    <main className="app">
      <Header
        selectedContentType={selectedContentType}
        onUpdateContentType={(type) => setSelectedContentType(type)}
      />

      <h3>List of {selectedContentType}</h3>

      <InfiniteLoader onReachBottom={fetchNewEntries}>
        <ul>
          {content?.length > 0 &&
            content
              .slice(0, contentLength)
              .map((item: any, index: number) =>
                selectedContentType === ContentEnum.USERS ? (
                  <User
                    key={index}
                    name={`${item.firstName} ${item.lastName}`}
                  />
                ) : (
                  <Post
                    key={index}
                    text={item.text}
                    publishDate={item.publishDate}
                    name={`${item.owner?.firstName} ${item.owner?.lastName}`}
                  />
                )
              )}
        </ul>
      </InfiniteLoader>
    </main>
  );
}

export default App;
