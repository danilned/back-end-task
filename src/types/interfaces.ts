export interface postId {
    id: number,
    postId: number,
};

export interface posts {
    id: number,
    data: string,
    status: boolean,
};

export interface postData extends posts, postId {};

export interface auth {
    login:string,
    password:string,
};

export interface register extends auth {
    email:string,
    rights: number,
};