import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { log } from "console";

//Consultar os produtos da API e exibir na tela
// - Resolver o problema de CORS

function ProdutoListar() {
    const[produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() =>{
        console.log("Carregou o componente");   
        fetch('http://localhost:5008/produto/listar')
            .then((resposta) => resposta.json())
            .then((produtos : Produto[]) => {
                setProdutos(produtos);
            });
        //FETCH
        
    }, []);

    function cadastrarProduto(){
        
        const produto : Produto = {
            nome: "Macarrão",
            descricao: "Comida",
            quantidade: 3,
            valor: 45,
        }

        fetch('http://localhost:5008/produto/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        })
            .then((resposta) => resposta.json())
            .then((produto : Produto) => {
                console.log(produto);
                
            });
    }

    return(
        <div>
            <h1>Listar Produtos</h1>
            <button onClick={cadastrarProduto}>Cadastrar Produto</button>
            <table border={3} bgcolor="wheat">
                <thead>
                    <tr>
                        <th >#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}
export default ProdutoListar