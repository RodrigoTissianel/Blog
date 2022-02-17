import Posts from '../Posts';


const Articles = () =>{

    return (
        <>
        <section className="container">
        <h1>Article.js</h1>
        <div className="container-posts mt-5">
        <Posts/>
        <Posts/>
        <Posts/>
        </div>
        </section>
        </>
    );
};

export default Articles;