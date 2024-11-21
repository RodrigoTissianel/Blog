import { IPost, IUsers } from "../Home/interface";

export interface IPostAuthorProps {
    user: IUsers | null;
}

export interface IPostInfoProps extends IPostAuthorProps {
    post: IPost | null;
}