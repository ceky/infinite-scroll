import { useState, useEffect } from 'react';
import axios from 'axios';

import { getPokemonsUrl } from './urls';

export default function useFetchContent(limit: number, offset: number) {
  const [url, setUrl] = useState(getPokemonsUrl(limit, offset));
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchContent() {
    setIsLoading(true);

    const response = await axios.get(url);

    const results = response.data.results;
    setContent(results);
    setIsLoading(false);
  }

  useEffect(() => {
    setUrl(getPokemonsUrl(limit, offset));
  }, [offset]);

  useEffect(() => {
    fetchContent();
  }, [url]);

  return { content, isLoading };
}
