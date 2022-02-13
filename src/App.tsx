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
  const [endd, setEndd] = useState(0);

  const content = useFetchContent(selectedContentType);
  console.log(content);

  const fetchNewEntries = useCallback(() => {
    console.log(`end=${endd}`);
    const newEnd = endd + NO_OF_NEW_ITEMS;
    console.log(`newEnd=${newEnd}`);
    setEndd(newEnd);
  }, []);

  useEffect(() => {
    console.log(endd);
  }, [endd]);

  return (
    <main className="app">
      <Header
        selectedContentType={selectedContentType}
        onUpdateContentType={(type) => setSelectedContentType(type)}
      />

      <h3>List of {selectedContentType}</h3>

      <InfiniteLoader onReachBottom={() => fetchNewEntries()}>
        <ul>
          {content
            .slice(0, endd)
            .map((item: any, index: number) =>
              selectedContentType === ContentEnum.USERS ? (
                <User key={index} name={`${item.firstName} ${item.lastName}`} />
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
