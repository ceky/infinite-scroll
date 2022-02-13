import { useState, useEffect } from 'react';
import axios from 'axios';

import { POSTS_URL, USERS_URL, APP_ID } from './urls';
import { ContentEnum, ContentType } from '../types/ContentType';

export default function useFetchContent(type: ContentType) {
  const [content, setContent] = useState([]);

  const url = type === ContentEnum.USERS ? USERS_URL : POSTS_URL;

  async function fetchContent() {
    const response = await axios.get(url, {
      headers: {
        'app-id': APP_ID,
      },
    });
    setContent(response.data.data);
  }

  useEffect(() => {
    fetchContent();
  }, [type]);

  return content;
}
