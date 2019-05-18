import { Comment } from './comment';

export class Post {
    _id: string;
    name: string;
    image: string;
    description: string;
    edit: boolean;
    userid: string;
    comment: string;
    comments: Comment[];
}