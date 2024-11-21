import React from 'react';
import twitter from '../../assets/icon-twitter.svg';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import youtube from '../../assets/icon-youtube.svg';
import ContactForm from './components/ContactForm/ContactForm';
import ContactIcons from './components/ContactIcons/ContactIcons';

const Contact = (): React.ReactElement => {
    return (
        <section className="container">
            <div className="row">
                <div className="grid-6">
                    <h3>Entre em contato</h3>
                    <p>
                        Aqui você vai conseguir mais informações sobre o projeto
                        Blog utilizando React.js.
                    </p>

                    <ContactForm />
                </div>
                <div className="grid-1 disappear"></div>

                <div className="grid-5">
                    <h5 className="mt-4">Algumas Informações</h5>

                    <h6 className="color-primary mt-4">Informações</h6>
                    <p>Projeto Blog. em React.js do curso FrontPUSH.</p>

                    <h6 className="color-primary mt-4">Endereço</h6>
                    <p>Rio de Janeiro, RJ</p>

                    <h6 className="color-primary mt-4">E-mail</h6>
                    <p>rodrigotissianel.dev@gmail.com</p>

                    <h6 className="color-primary mt-4">E-mail</h6>
                    <div className="mt-2">
                        <ContactIcons src={facebook} alt="facebook" path="#" />
                        <ContactIcons
                            src={instagram}
                            alt="instagram"
                            path="#"
                        />
                        <ContactIcons src={youtube} alt="youtube" path="#" />
                        <ContactIcons src={twitter} alt="twitter" path="#" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
