import Posts from '../Posts';


const Articles = () =>{

    return (
        
        <section className="container">
        <h1>Article.js</h1>
        <div className="container-posts mt-5">
        <Posts subtitle="tecnologia" title="O guia definitivo sobre o blog">
            1lorem ipsum sit dolor amet ipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor amet
        </Posts>

        <Posts subtitle="Fotografia" title="Quais as melhores câmeras em 2021?">
            2lorem ipsum sit dolor amet ipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor amet
        </Posts>

        <Posts subtitle="Cinema" title="Os 10 filmes com maior bilheteria">
            3lorem ipsum sit dolor amet ipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor ametipsum sit dolor amet
            ipsum sit dolor ametipsum sit dolor amet
        </Posts>
        </div>
        </section>
        
    );
};

export default Articles;