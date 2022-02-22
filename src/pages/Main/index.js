
import api from '../../services/api';
import Posts from '../../components/Posts';
import {useState} from 'react';

const Main = () =>{
    const [post, setPost] = useState([]);

    /*
     async function handleAxios(){
        const response = await api.get('/posts'); //Busca a constante "api" criada no api.js, que contem a criação do axios e tem a baseURL. Usamos o async para definir a      função como assíncrona e o await para que a função possa ser executada e SOMENTE APÓS ISSO o console.log leia a variável
        console.log(response);
    }
    */ 
   //Outra maneira de azer a função ser executada e depois lida é usando o .then:
   /*
    function handleAxios(){
        const response = api.get('/posts')
        .then(function(response){

        })
        .catch(function(error){
            //Usado no tratamento de erros
        })
    }
    */
   //Podemos ainda usar os métodos try e catch junto com o async await para que também haja o tratamento de erros:

   async function handleAxios(){
       try{
           const response = await api.get('/posts');
           setPost(response.data);
           console.log(response);
       }
       catch (error){
        console.log(error);
       }
   }

    return(
        <>
        <section className='container'>
        <h1>Main.js</h1>
        <button onClick={handleAxios}>Fazer requisição</button>
        <div className="mt-5 container-posts">
            {
                post.map(post =>{
                    return(
                        <>
                        <Posts key={post.id} subtitle={post.category} title={post.title}>
                            {post.resume}
                        </Posts>
                        </>
                    )
                })
            }
        </div>
        </section>
        </>
    );
}

export default Main;