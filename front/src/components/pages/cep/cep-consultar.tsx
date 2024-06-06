import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";

function CepConsultar() {
    const[cep, setCep] = useState("");
    const[logradouro, setLogradouro] = useState("");
    const[bairro, setBairro] = useState("");
    const[localidade, setLocalidade] = useState("");
    const[uf, setUf] = useState("");


    //Executar algum código no carregamento do componente
    useEffect(() =>{
        console.log("Carregou o componente");   
        
    }, []);

    function carregarCep(){
        
        //FETCH
        fetch("https://viacep.com.br/ws/"+ cep +"/json/")
        .then((resposta) => resposta.json())
        .then((endereco : Endereco) => {
            setLogradouro(endereco.logradouro)
            setBairro(endereco.bairro)
            setLocalidade(endereco.localidade)
            setUf(endereco.uf)
        });
    }

    return(
        <div>
            <h1>Consultar CEP</h1> <br />

            <input 
                type="text" 
                placeholder="Digite o CEP" 
                onBlur={carregarCep} 
                onChange={(e : any) => setCep(e.target.value)}
            />


            <p>{logradouro}</p> <br />
            <input type="text" value={bairro}></input> <br />
            <button>{localidade}</button> <br />
            <h2>{uf}</h2> <br />
        </div>
    );
}
export default CepConsultar