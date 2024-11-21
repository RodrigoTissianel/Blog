import React from 'react';

const PostForm = (): React.ReactElement => {
    return (
        <form id="newPost">
            <div className="row">
                <div className="grid-3 p-0">
                    <label htmlFor="Date">
                        <h6>Data</h6>
                    </label>
                    <input type="date" name="date" id="Date" className="mt-1" />
                </div>

                <div className="grid-3 p-0">
                    <label htmlFor="category">
                        <h6>Categoria</h6>
                    </label>
                    <select name="category" id="category" className="mt-1">
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Games">Games</option>
                        <option value="Fotografia">Fotografia</option>
                        <option value="Cinema">Cinema</option>
                    </select>
                </div>

                <div className="grid-6 p-0">
                    <label htmlFor="title">
                        <h6>Título</h6>
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1"
                    />
                </div>
            </div>

            <div className="row">
                <div className="grid-9 p-0">
                    <label htmlFor="resume">
                        <h6>Resumo</h6>
                    </label>
                    <input
                        type="text"
                        name="resume"
                        id="resume"
                        className="mt-1"
                    />
                </div>

                <div className="grid-3 p-0">
                    <label htmlFor="duration">
                        <h6>Duração</h6>
                    </label>
                    <select name="duration" id="duration" className="mt-1">
                        <option value="5 min.">5 min.</option>
                        <option value="7min.">7min.</option>
                        <option value="10 min.">10 min.</option>
                        <option value="15 min.">15 min.</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="grid-12 p-0">
                    <label htmlFor="description">
                        <h6>Descrição</h6>
                    </label>
                    <textarea
                        rows={10}
                        name="description"
                        id="description"
                        className="w-100 mt-1"
                    />
                </div>
            </div>

            <div className="row flex-end-row">
                <button className="btn mr-2" value="adicionar">
                    Adicionar
                </button>
            </div>
        </form>
    );
};

export default PostForm;
