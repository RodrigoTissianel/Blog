import React from 'react';
import logoBlog from '../../assets/blog-logo2.svg';
import twitter from '../../assets/icon-twitter.svg';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import youtube from '../../assets/icon-youtube.svg';

const Footer = (): React.ReactElement => {
    return (
        <footer className="bg-section bt-black">
            <section className="container pb-0">
                <div className="row flex-center">
                    <img
                        src={logoBlog}
                        alt="Logo do blog"
                        className="icon-l"
                    ></img>
                </div>

                <div className="row bb-black pb-3">
                    <div className="grid-3 pl-2">
                        <h4>Posts</h4>
                        <div className="flex-start-column mt-2">
                            <a href="#" className="color-gray link-footer">
                                Mais vistos
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Mais comentados
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Mais populares
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Mais recentes
                            </a>
                        </div>
                    </div>

                    <div className="grid-3 pl-2">
                        <h4>Categorias</h4>
                        <div className="flex-start-column mt-2">
                            <a href="#" className="color-gray link-footer">
                                Tecnologia
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Games
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Fotografia
                            </a>
                            <a href="#" className="color-gray link-footer">
                                Cinema
                            </a>
                        </div>
                    </div>

                    <div className="grid-6">
                        <h4>Quer ser avisado dos novos posts do blog?</h4>
                        <p className="mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare urna pharetra ut ac, pellentesque.
                        </p>

                        <form className="flex-start-row mt-3">
                            <input
                                type="text"
                                name="e-mail"
                                placeholder="Digite seu e-mail"
                            ></input>
                            <button className="btn ml-2">Cadastrar</button>
                        </form>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="grid-9">
                        <p>
                            2022 | Todos os direitos reservados. Projeto de
                            react.js do curso{' '}
                            <a href="http://frontpush.com" target="_blank">
                                FrontPush
                            </a>{' '}
                        </p>
                    </div>

                    <div className="grid-3">
                        <a className="ml-2">
                            <img
                                src={facebook}
                                alt="facebook"
                                className="icon-s"
                            ></img>
                        </a>

                        <a className="ml-2">
                            <img
                                src={instagram}
                                alt="instagram"
                                className="icon-s"
                            ></img>
                        </a>

                        <a className="ml-2">
                            <img
                                src={youtube}
                                alt="youtube"
                                className="icon-s"
                            ></img>
                        </a>

                        <a className="ml-2">
                            <img
                                src={twitter}
                                alt="twitter"
                                className="icon-s"
                            ></img>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
