import React from 'react';
import { IPostInfoProps } from '../../interfaces';

const PostInfo = ({ user, post }: IPostInfoProps): React.ReactElement => {
    return (
        <div className="flex-center my-3">
            <div className="profile">
                <img
                    src={user?.ImageProfile}
                    className="profile-img"
                    alt="imagem do usuário"
                />
            </div>

            <div className="ml-2">
                <h6 className="color-primary">
                    {user?.name} {user?.surname}
                </h6>
                <h6 className="color-gray">{user?.user}</h6>
            </div>

            <p className="ml-4 color-gray">
                {post?.date} - {post?.duration} min
            </p>
        </div>
    );
};

export default PostInfo;
