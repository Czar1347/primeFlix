// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Importa a instância da API configurada
import api from "../../services/api";

// Importa o componente Link do react-router-dom para navegação entre páginas
import { Link } from "react-router-dom";

// Importa o arquivo de estilos CSS para esta página
import "./home.css";

// Componente Home que exibe a lista de filmes em exibição
function Home() {
  // Define os estados para armazenar os filmes e o status de carregamento
  const [filmes, setFilmes] = useState([]); // Estado para armazenar os filmes
  const [loading, setLoading] = useState(true); // Estado para indicar se a página está carregando os filmes

  // Hook useEffect que é executado assim que o componente é montado
  useEffect(() => {
    // Função assíncrona para carregar os filmes da API
    async function loadFilmes() {
      // Faz uma requisição GET para a rota 'movie/now_playing' da API
      const response = await api.get("movie/now_playing", {
        params: {
          // Parâmetros da requisição
          api_key: "b7c397b7ac9d3e5014089c2e9458f2b6", // Chave de API necessária para autenticação
          language: "pt-BR", // Define o idioma dos resultados como português do Brasil
          page: 1, // Define a página de resultados como a primeira página
        },
      });
      
      // Define o estado 'filmes' com os resultados da requisição, limitando a 10 filmes
      setFilmes(response.data.results.slice(0, 10));
      
      // Define o estado 'loading' como false para indicar que o carregamento foi concluído
      setLoading(false);

      // Exibe no console os 10 primeiros filmes carregados
      console.log(response.data.results.slice(0, 10));
    }

    // Chama a função para carregar os filmes assim que o componente é montado
    loadFilmes();
  }, []); // O array vazio indica que o useEffect será executado apenas uma vez, quando o componente é montado

  // Renderiza uma mensagem de carregamento enquanto os filmes estão sendo carregados
  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  // Renderiza a lista de filmes após o carregamento
  return (
    <div className="container">
      <div className="lista-filmes">
        {/* Mapeia a lista de filmes e renderiza um artigo para cada filme */}
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t//p/original//${filme.poster_path}`} // URL da imagem do filme
                alt={filme.title} // Texto alternativo da imagem
              />
              {/* Link para acessar a página de detalhes do filme */}
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

// Exporta o componente Home para que possa ser utilizado em outros locais da aplicação
export default Home;
