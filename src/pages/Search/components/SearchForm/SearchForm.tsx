import React from 'react';
import { ISearchFormProps } from '../../interfaces';

const SearchForm = ({
    setForm,
    setWord,
    form,
}: ISearchFormProps): React.ReactElement => {
    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    }

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setWord(form.search);
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="row">
                <div className="grid-2 disappear"></div>

                <div className="grid-8 flex-center">
                    <input
                        type="text"
                        name="search"
                        onChange={onChange}
                        placeholder="Faça uma busca"
                    ></input>
                    <button className="btn ml-2">Buscar</button>
                </div>

                <div className="grid-2 disappear"></div>
            </div>
        </form>
    );
};

export default SearchForm;
