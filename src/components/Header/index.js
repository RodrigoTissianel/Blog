import Logosvg from '../../svg/logo.svg';


const Header = () =>{
    const descLogo = "Essa á a descrição da logo do Blog.";
    return (
        <>
        <header className="flex-space-between">
            <div className="logo">
                <img src={Logosvg} alt={descLogo}></img>
            </div>
            <div className="search">
                <input type="text" name="search" className="input-search" placeholder="Buscar artigos, podcasts, destaques..."></input>
            </div>
            <ul className="menu">
                <li> <a href="https://google.com" className="nav-link">Categories</a> </li>
                <li> <a href="https://google.com" className="nav-link">About</a> </li>
                <li> <a href="https://google.com" className="nav-link">Contact</a> </li>
            </ul>
        </header>
        </>
    );
};

export default Header;