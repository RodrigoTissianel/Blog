import star from '../../assets/icon-star.svg';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import MostSeen from './components/MostSeen/MostSeen';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import { IPost } from './interface';
import MostRecent from './components/MostRecent/MostRecent';

//API

const Home = () => {
    const [main, setMain] = useState<IPost[]>([]);
    const [mostSeen, setMostSeen] = useState<IPost[]>([]);
    const [banner, setBanner] = useState<IPost[]>([]);
    const [mostRecent, setMostRecent] = useState<IPost[]>([]);

    const fetchPosts = async () => {
        try {
            const [
                mainResponse,
                mostSeenResponse,
                bannerResponse,
                mostRecentResponse,
            ] = await Promise.all([
                api.get('/posts?star=5&_limit=2&_order=desc'),
                api.get('/posts?_sort=views&_limit=3&_order=desc'),
                api.get('/posts?_sort=date&_limit=1&_order=desc'),
                api.get('/posts?_sort=date&_limit=3&_order=asc'),
            ]);

            setMain(mainResponse.data);
            setMostSeen(mostSeenResponse.data);
            setBanner(bannerResponse.data);
            setMostRecent(mostRecentResponse.data);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <Hero />

            <section className="container">
                <div className="row flex-center">
                    <div className="grid-6">
                        <div className="icon-l">
                            <img src={star} alt="star icon"></img>
                        </div>

                        <h2 className="mt-2">
                            Os melhores e mais bem votados posts do mês
                        </h2>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. At officiis a unde libero architecto nemo,
                            dignissimos necessitatibus quibusdam nobis expedita,
                            eligendi!
                        </p>
                    </div>

                    <div className="grid-6">
                        {main.map((item) => {
                            return <Main key={item.id} content={item} />;
                        })}
                    </div>
                </div>
            </section>

            <section className="container">
                <h3>Posts com mais visitas</h3>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia eius possimus asperiores rerum, iure beatae corporis
                    optio ducimus, sed quaerat doloribus dolor?
                </p>

                <div className="row mt-4">
                    {mostSeen.map((item) => {
                        return <MostSeen key={item.id} content={item} />;
                    })}
                </div>
            </section>

            <section className="container">
                {banner.map((item) => {
                    return <Banner key={item.id} content={item} />;
                })}
            </section>

            <section className="container">
                <h3 className="mb-3 ml-2">Posts recentes</h3>
                <div className="row">
                    {mostRecent.map((item) => (
                        <MostRecent key={item.id} content={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
