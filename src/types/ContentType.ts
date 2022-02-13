export enum ContentEnum {
  POSTS = 'posts',
  USERS = 'users',
}

export type ContentType = `${ContentEnum}`; // 'posts' | 'users'
