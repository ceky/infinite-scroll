import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfiniteLoader from './components/InfiniteLoader/InfiniteLoader';
import Post from './components/Post/Post';
import User from './components/User/User';
import useFetchContent from './services/useFetchContent';
import { ContentEnum, ContentType } from './types/ContentType';
import { PostType } from './types/PostType';
import { UserType } from './types/UserType';

const NO_OF_NEW_ITEMS = 10;

function App() {
  const [selectedContentType, setSelectedContentType] = useState<ContentType>(
    ContentEnum.USERS
  );
  const [contentLength, setContentLength] = useState(NO_OF_NEW_ITEMS);

  const { content, isLoading } = useFetchContent(selectedContentType);

  useEffect(() => {
    setContentLength(NO_OF_NEW_ITEMS);
  }, [selectedContentType]);

  const fetchNewEntries = useCallback(() => {
    setContentLength(contentLength + NO_OF_NEW_ITEMS);
  }, [contentLength]);

  const onUpdateContentType = (type: ContentType) => {
    setSelectedContentType(type);
  };

  function renderUsers(item: UserType, index: number) {
    return (
      <User
        key={index}
        name={`${item.firstName} ${item.lastName}`}
        pictureUrl={item.picture}
      />
    );
  }

  function renderPosts(item: PostType, index: number) {
    return (
      <Post
        key={index}
        text={item.text}
        publishDate={item.publishDate}
        name={`${item.owner?.firstName} ${item.owner?.lastName}`}
      />
    );
  }

  return (
    <main className="app">
      <Header
        selectedContentType={selectedContentType}
        onUpdateContentType={(type) => onUpdateContentType(type)}
      />

      <InfiniteLoader onReachBottom={fetchNewEntries} isLoading={isLoading}>
        <ul>
          {content?.length > 0 &&
            content
              .slice(0, contentLength)
              .map((item: any, index: number) =>
                selectedContentType === ContentEnum.USERS
                  ? renderUsers(item, index)
                  : renderPosts(item, index)
              )}
        </ul>
      </InfiniteLoader>
    </main>
  );
}

export default App;
