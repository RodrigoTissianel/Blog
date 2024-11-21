import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IPost } from '../Home/interface';
import MostSeen from '../Home/components/MostSeen/MostSeen';
import { ISearchForm } from './interfaces';
import SearchForm from './components/SearchForm/SearchForm';

const Search = () => {
    const { word_search } = useParams();

    const [word, setWord] = useState(word_search);
    const [search, setSearch] = useState<IPost[]>([]);
    const [form, setForm] = useState<ISearchForm>({ search: '' });

    const SearchPosts = async (word: string) => {
        try {
            const response = await api.get(`/posts/?q=${word}`);
            setSearch(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        if (word) {
            SearchPosts(word);
        }
    }, [word]);

    return (
        <section className="container">
            <h6 className="uppercase color-primary text-center">
                {search.length} resultados
            </h6>
            <h4 className="text-center">{word}</h4>

            <SearchForm form={form} setForm={setForm} setWord={setWord} />

            <p className="mt-2">Faça uma busca pelo nosso Blog</p>

            <div className="row mt-4">
                {search.map((item) => {
                    return <MostSeen key={item.id} content={item} />;
                })}
            </div>
        </section>
    );
};

export default Search;
