import { useCallback, useEffect } from 'react';

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
  }, []);

  const handleScroll = useCallback((event) => {
    // const containerHeight = event.currentTarget.clientHeight;
    // const scrollHeight = event.currentTarget.scrollHeight;

    // const scrollTop = event.currentTarget.scrollTop;

    const target = event.target as HTMLElement;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      onReachBottom();
      console.log('bottom');
    }
  }, []);

  return <div>{children}</div>;
}

export default InfiniteLoader;
