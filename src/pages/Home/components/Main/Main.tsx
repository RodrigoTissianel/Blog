import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../services/api';
import { IContentProps, IUsers } from '../../interface';

const Main = ({ content }: IContentProps) => {
    const [user, setUser] = useState<IUsers | null>(null);

    const fetchUser = async (id_user: number) => {
        try {
            const response = await api.get(`/user/${id_user}`);
            setUser(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    };

    useEffect(() => {
        if (content) {
            fetchUser(content.id_user);
        }
    }, [content]);

    return (
        <>
            <div className="bb-black py-3">
                <h6 className="color-gray">{content.date}</h6>
                <h6 className="uppercase color-primary">{content.category}</h6>
                <Link to={`/Post/${content.id}`}>
                    <h4 className="mt-1">{content.title}</h4>
                </Link>
                <p className="mt-1">{content.resume}</p>

                <div className="flex-start-row mt-3">
                    <div className="profile">
                        <img
                            src={user?.ImageProfile}
                            className="profile-img"
                            alt="imagem do usuário"
                        ></img>
                    </div>

                    <div className="ml-1">
                        <h6 className="color-primary">
                            {user?.name} {user?.surname}
                        </h6>
                        <h6 className="color-gray">@{user?.user}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
