export interface IPost {
    id: number;
    id_user: number;
    date: string;
    imageUrl: string;
    category: string;
    title: string;
    resume: string;
    content: string;
    duration: string;
    star: string;
    views: string;
    status: boolean;
};

export interface IUsers {
    id: number;
    user: string;
    name: string;
    surname: string;
    token: string;
    description: string;
    ImageProfile: string;
}

export interface IContentProps {
    content: IPost;
}