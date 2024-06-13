import React from "react";
import CepConsultar from "./components/pages/cep/cep-consultar";
import ProdutoListar from "./components/pages/produto/produto-listar";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";
import { BrowserRouter, Link, Route ,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ol>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/produto/listar"}>Listar Produtos</Link>
            </li>
            <li>
              <Link to={"/pages/produto/cadastrar"}>Cadastrar Produtos</Link>
              </li>
          </ol>
        </nav>
      <Routes>
        <Route path="/" element={<ProdutoListar/>}/>
        <Route path="/pages/produto/listar" element={<ProdutoListar/>}/>
        <Route path="/pages/produto/cadastrar" element={<ProdutoCadastrar/>}/>
      </Routes>
      
      <footer>
        <p>Desenvolvido por Marcel Felipe Lell Flores</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
