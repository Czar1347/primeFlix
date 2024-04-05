// Importa o componente Link do react-router-dom para navegação entre páginas
import { Link } from "react-router-dom";

// Importa o arquivo de estilos CSS para esta página
import './error.css';

// Componente Error que exibe uma mensagem de erro quando a página não é encontrada (erro 404)
function Error() {
    return (
        <div className="not-found">
            <h1>ERRO 404</h1>
            <h2>Página não encontrada!</h2>
            {/* Link para redirecionar o usuário para a página inicial */}
            <Link to='/'>Veja todos os filmes clicando aqui</Link>
        </div>
    );
}

// Exporta o componente Error para que possa ser utilizado em outros locais da aplicação
export default Error;
