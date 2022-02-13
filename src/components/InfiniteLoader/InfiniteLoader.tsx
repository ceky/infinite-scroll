import { useEffect } from 'react';

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

  return <div>{children}</div>;
}

export default InfiniteLoader;
