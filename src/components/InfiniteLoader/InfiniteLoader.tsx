import { useEffect } from 'react';
import './InfiniteLoader.css';

type OwnProps = {
  children: JSX.Element;
  onReachBottom: () => any;
};

function InfiniteLoader({ children, onReachBottom }: OwnProps) {
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
      <div>{children}</div>
    </div>
  );
}

export default InfiniteLoader;
