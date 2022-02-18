import Header from './components/Header';
import Articles from './components/Articles';

import {useState} from 'react';

function App() {
/*
  let carrinho = useSteate(0); //Sempre vai retornar duas coiasas, uma é a variável e a outra é uma função para atualizar a variável
  let count = carrinho[0]; //retorna a primeira posição do carrinho
  let setcount = carrinho[1]; //variável que vai receber a função que vai setar o novo valor do contador do carrinho*/

  let [carrinho, setCarrinho] = useState(0); //primerio é a variável e o segundo é a função que vai renderizar o valor caso tenha havido alguma mudança na variável

  const addItem = () =>{
    setCarrinho(carrinho + 1);
    console.log(carrinho);
  }

  const removeItem = () =>{
    if(carinho > 0){
      setCarrinho(carrinho - 1);
    }

    console.log(carrinho);
  }

  return (
  <>
  <Header></Header>
  <Articles></Articles>

    <h1>Carrinho de compras: {carrinho}</h1>
    <div className="flex">
      <button className="ml-2 add-button" onClick={addItem}>+</button>
      <button className="ml-2 remove-button" onClick={removeItem}>-</button>
    </div>

  </>
  );
}

export default App;
