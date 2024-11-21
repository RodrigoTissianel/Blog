//Hooks
import { useEffect, useState } from 'react';

//Params
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { IPost, IUsers } from '../Home/interface';
import PostAuthor from './components/PostAuthor/PostAuthor';
import PostInfo from './components/PostInfo/PostInfo';

//API

const Post = () => {
    const [post, setPost] = useState<IPost | null>(null);
    const [user, setUser] = useState<IUsers | null>(null);
    const { idPost } = useParams();

    const fetchPostAndUser = async () => {
        try {
            const postResponse = await api.get('/posts/' + idPost);
            setPost(postResponse.data);

            const userResponse = await api.get(
                '/user/' + postResponse.data.id_user
            );
            setUser(userResponse.data);
        } catch (error) {
            console.error('Erro ao buscar post ou usuário:', error);
        }
    };

    useEffect(() => {
        fetchPostAndUser();
        scrollTo({ top: 0 });
    }, [idPost]);

    return (
        <section className="container">
            <h6 className="uppercase color-primary text-center">
                {post?.category}
            </h6>
            <h3 className="text-center">{post?.title}</h3>

            <PostInfo user={user} post={post} />

            <div className="img-banner hidden">
                <img src={post?.imageUrl} alt="Imagem do post" />
            </div>

            <div className="row">
                <h4 className="mt-3">{post?.title}</h4>
                <p className="mt-1">{post?.content}</p>
            </div>

            <div className="row mt-3">
                <PostAuthor user={user} />
            </div>
        </section>
    );
};

export default Post;
