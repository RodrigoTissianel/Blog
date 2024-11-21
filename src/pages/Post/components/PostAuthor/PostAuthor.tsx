import React from 'react';
import { IPostAuthorProps } from '../../interfaces';

const PostAuthor = ({ user }: IPostAuthorProps): React.ReactElement => {
    return (
        <>
            <div className="grid-3 disappear"></div>

            <div className="grid-6 card">
                <div className="row">
                    <div className="grid-3 flex-center pl-1">
                        <div className="profile-big">
                            <img
                                src={user?.ImageProfile}
                                alt="Imagem do usuário"
                                className="profile-img"
                            ></img>
                        </div>
                    </div>

                    <div className="grid-9">
                        <h6 className="color-primary">
                            {user?.name} {user?.surname}
                        </h6>
                        <h6 className="color-gray">{user?.user}</h6>
                        <p className="mt-1">{user?.description}</p>
                    </div>
                </div>
            </div>

            <div className="grid-3 disappear"></div>
        </>
    );
};

export default PostAuthor;
