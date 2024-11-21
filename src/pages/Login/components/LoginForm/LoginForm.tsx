import React from 'react';

const LoginForm = (): React.ReactElement => {
    return (
        <form>
            <input
                type="text"
                name="user"
                placeholder="Digite seu usuário"
                className="mt-3"
            ></input>
            <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="mt-2"
            ></input>
            <button className="btn w-100 mt-4">Entrar</button>
        </form>
    );
};

export default LoginForm;
