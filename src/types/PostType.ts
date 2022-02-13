import { UserType } from './UserType';

export type PostType = {
  text: string;
  publishDate: string;
  owner: UserType;
};
