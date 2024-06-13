import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { log } from "console";
import axios from "axios";

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

    function deletar(id : string){
        axios.delete(`http://localhost:5008/produto/deletar/"${id}` )
        .then((resposta) => {
            console.log(resposta.data);
            setProdutos(resposta.data);
            
        })
    }

    return(
        <div>
            <h1>Listar Produtos</h1>
            <table border={3} bgcolor="wheat">
                <thead>
                    <tr>
                        <th >#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Criado Em</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.criadoEm}</td>
                            <td>
                                <button onClick={() => {
                                    deletar(produto.id!)
                                }}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}
export default ProdutoListar