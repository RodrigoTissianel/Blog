import React from 'react';

const ContactForm = (): React.ReactElement => {
    return (
        <form>
            <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="mt-2"
            ></input>
            <input
                type="e-mail"
                name="e-mail"
                placeholder="E-mail"
                className="mt-2"
            ></input>
            <textarea
                rows={8}
                cols={50}
                placeholder="Mensagem"
                className="mt-2"
            ></textarea>
            <button className="btn mt-2" value="enviar">
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
