// Importa os hooks useEffect e useState do React
import { useEffect, useState } from 'react';

// Importa o componente Link do react-router-dom para navegação entre páginas
import { Link } from 'react-router-dom';

// Importa o arquivo de estilos CSS para esta página
import './favoritos.css';

// Componente Favoritos que exibe a lista de filmes salvos na lista de favoritos
function Favoritos() {
    // Define o estado para armazenar os filmes salvos na lista de favoritos
    const [filmes, setFilmes] = useState([]);

    // Hook useEffect que é executado assim que o componente é montado
    useEffect(() => {
        // Obtém a lista de filmes salvos da localStorage
        const minhaLista = localStorage.getItem("@primeflix");
        // Atualiza o estado 'filmes' com a lista de filmes salvos, ou define como um array vazio se não houver filmes salvos
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    // Função para excluir um filme da lista de favoritos
    function excluirFilme(id) {
        // Filtra os filmes da lista de favoritos, removendo o filme com o ID especificado
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        });
        // Atualiza o estado 'filmes' com a lista filtrada de filmes
        setFilmes(filtroFilmes);
        // Salva a lista filtrada de filmes na localStorage
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
    }

    // Renderiza o conteúdo da lista de filmes salvos na lista de favoritos
    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {/* Exibe uma mensagem se não houver filmes salvos */}
            {filmes.length === 0 && <span>Você não tem nenhum filme salvo:(</span>}
            {/* Renderiza a lista de filmes salvos */}
            <ul>
                {/* Mapeia a lista de filmes e renderiza um item de lista para cada filme */}
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            {/* Exibe o título do filme */}
                            <span>{item.title}</span>
                            <div>
                                {/* Link para ver detalhes do filme */}
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                {/* Botão para excluir o filme da lista de favoritos */}
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// Exporta o componente Favoritos para que possa ser utilizado em outros locais da aplicação
export default Favoritos;
