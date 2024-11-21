import logo from '../../assets/blog-logo2.svg';

import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';

const Login = (): React.ReactElement => {
    return (
        <section className="container">
            <div className="row">
                <div className="grid-4 disappear"></div>

                <div className="grid-4">
                    <div className="flex-center">
                        <img src={logo} alt="logo do blog" className="icon-l" />
                    </div>

                    <h5 className="text-center">
                        Olá! Faça o login para continuar
                    </h5>

                    <LoginForm />
                </div>

                <div className="grid-4 disappear"></div>
            </div>
        </section>
    );
};

export default Login;
