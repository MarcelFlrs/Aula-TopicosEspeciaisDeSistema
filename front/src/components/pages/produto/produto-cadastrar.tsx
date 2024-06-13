import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { useNavigate } from "react-router-dom";

function ProdutoCadastrar(){
    const navigate = useNavigate();
    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[quantidade, setQuantidade] = useState("")
    const[valor, setValor] = useState("")

    function cadastrarProduto(e : any){
        e.preventDefault();

        const produto : Produto = {
            nome: nome,
            descricao: "descricao",
            quantidade: 10,
            valor: 10,
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
                setNome("");
                navigate("/pages/produto/listar");
            });
    }

    return(
        <div>
            <h1>Cadastrar Produtos</h1>
            <form onSubmit={cadastrarProduto}>
                <label>Nome: </label>
                <input type="text" value={nome} onChange={(e : any) => setNome(e.target.value)}required/>

                <button type="submit">Cadastrar Produto</button>   
            </form>
            
        </div>
    );
}

export default ProdutoCadastrar;