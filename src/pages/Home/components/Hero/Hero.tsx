import logoBlog from '../../../../assets/blog.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h1 className="h0">
                            blog <span>.</span>{' '}
                        </h1>
                        <p className="mt-1">
                            Um blog para todos. Escrever. Ler. Comentar.
                            Contribuir. Aprender. Conectar
                        </p>
                        <Link to="/Login" className="btn mt-4">
                            Começar a escrever
                        </Link>
                    </div>

                    <div className="grid-6">
                        <div className="">
                            <img src={logoBlog} alt="Logo do blog"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
