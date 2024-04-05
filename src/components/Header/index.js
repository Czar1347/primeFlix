// Importa o arquivo de estilos CSS para este componente
import './header.css';

// Importa o componente Link do react-router-dom para navegação entre páginas
import { Link } from 'react-router-dom';

// Componente Header que exibe o cabeçalho da aplicação
function Header() {
    return (
        <header>
            {/* Link para a página inicial com o texto "Prime Flix" */}
            <Link className='logo' to="/">Prime Flix</Link>
            {/* Link para a página de favoritos com o texto "Meus Filmes" */}
            <Link className='favoritos' to="/favoritos">Meus Filmes</Link>
        </header>
    );
}

// Exporta o componente Header para que possa ser utilizado em outros locais da aplicação
export default Header;
