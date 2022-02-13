import { useState, useEffect } from 'react';
import axios from 'axios';

import { POSTS_URL, USERS_URL, APP_ID } from './urls';
import { ContentEnum, ContentType } from '../types/ContentType';

export default function useFetchContent(type: ContentType) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = type === ContentEnum.USERS ? USERS_URL : POSTS_URL;

  async function fetchContent() {
    setIsLoading(true);
    const response = await axios.get(url, {
      headers: {
        'app-id': APP_ID,
      },
    });
    setContent(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchContent();
  }, [type]);

  return {
    content,
    isLoading,
  };
}
