// Importa os componentes necessários do pacote react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa os componentes de páginas e componentes personalizados
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Error from './pages/Error';
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";

// Componente que define as rotas da aplicação
function RoutesApp() {
  return (
    // Define o BrowserRouter que envolve todas as rotas da aplicação
    <BrowserRouter>
      {/* Renderiza o componente Header que estará presente em todas as rotas */}
      <Header />
      {/* Define as rotas da aplicação */}
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota para exibir detalhes de um filme, com um parâmetro de ID */}
        <Route path="/filme/:id" element={<Filme />} />
        {/* Rota para exibir a lista de filmes favoritos */}
        <Route path='/favoritos' element={<Favoritos/>}/>
        {/* Rota para lidar com qualquer outra URL que não corresponda às rotas acima */}
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

// Exporta o componente RoutesApp para que possa ser utilizado em outros locais da aplicação
export default RoutesApp;
