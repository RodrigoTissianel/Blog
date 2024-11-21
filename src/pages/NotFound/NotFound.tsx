import logo from '../../assets/blog-logo2.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="flex-center">
                    <img src={logo} alt="logo do blog" className="icon-l"></img>
                </div>
            </div>

            <div className="row">
                <div className="grid-4 disappear"></div>

                <div className="grid-4 text-center">
                    <h1 className="h0 color-primary">404</h1>
                    <h5>Página não encontrada!</h5>
                    <p className="mt-2">
                        A página que você tá procurando não existe ou foi
                        removida. Clique para voltar para o site.
                    </p>
                    <Link to="/" className="btn w-100 mt-3">
                        Voltar para a home
                    </Link>
                </div>

                <div className="grid-4 disappear"></div>
            </div>
        </section>
    );
};

export default NotFound;
