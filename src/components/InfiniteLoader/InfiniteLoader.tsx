import { useEffect } from 'react';
import './InfiniteLoader.css';

type OwnProps = {
  children: JSX.Element;
  isLoading: boolean;
  onReachBottom: () => any;
};

function InfiniteLoader({ children, isLoading, onReachBottom }: OwnProps) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll as any);
    return () => {
      window.removeEventListener('scroll', handleScroll as any);
    };
  }, [onReachBottom]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      onReachBottom();
    }
  };

  return (
    <div className="infinite-loader">
      {isLoading && <div className="loading">Loading...</div>}
      {!isLoading && <p>{children}</p>}
    </div>
  );
}

export default InfiniteLoader;
