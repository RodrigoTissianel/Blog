import React from 'react';
import perfil from '../../../../assets/Rodrigo.jpg';

const ProfileInfo = (): React.ReactElement => {
    return (
        <>
            <div className="grid-6">
                <div className="flex-start-row">
                    <div className="profile-big">
                        <img
                            src={perfil}
                            alt="imagem de perfil"
                            className="profile-img"
                        ></img>
                    </div>

                    <div className="ml-3">
                        <h3>Rodrigo Dias</h3>
                        <h6 className="color-gray">@rodrigodias</h6>
                    </div>
                </div>
                <p className="mt-3">
                    Olá, seja bem vindo ao blog. Compartilhe conhecimento!
                </p>
            </div>

            <div className="grid-6 flex-center">
                <a href="#" className="btn">
                    Meus dados
                </a>
                <a href="#" className="btn ml-3">
                    Adicionar post
                </a>
            </div>
        </>
    );
};

export default ProfileInfo;
