import { useEffect } from "react";

//Consultar os produtos da API e exibir na tela
// - Resolver o problema de CORS

function ProdutoListar() {
    //Executar algum código no carregamento do componente
    useEffect(() =>{
        console.log("Carregou o componente");   

        //FETCH
        fetch('https://viacep.com.br/ws/81520580/json/')
            .then((resposta) => resposta.json())
            .then((dados) => {
                console.log(dados);
            });
    }, []);

    return(
        <div>
            <h1>Listar Produtos</h1>
        </div>
    );
}
export default ProdutoListar