// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Importa o hook useParams do react-router-dom para acessar parâmetros da URL
import { useParams, useNavigate } from "react-router-dom";

// Importa o arquivo de estilos CSS para esta página
import "./filme.css";

// Importa a instância da API configurada
import api from "../../services/api";

// Importa o componente toast do react-toastify para exibir notificações
import { toast } from 'react-toastify';

// Componente Filme que exibe os detalhes de um filme específico
function Filme() {
  // Obtém o parâmetro 'id' da URL utilizando o hook useParams
  const { id } = useParams();

  // Utiliza o hook useNavigate para realizar navegação programaticamente
  const navigate = useNavigate();

  // Define os estados para armazenar os detalhes do filme e o status de carregamento
  const [filme, setFilme] = useState({}); // Estado para armazenar os detalhes do filme
  const [loading, setLoading] = useState(true); // Estado para indicar se a página está carregando os detalhes do filme

  // Hook useEffect que é executado assim que o componente é montado ou quando o parâmetro 'id' muda
  useEffect(() => {
    // Função assíncrona para carregar os detalhes do filme da API
    async function loadFilme() {
      try {
        // Faz uma requisição GET para a rota 'movie/:id' da API, passando o ID do filme como parâmetro
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "b7c397b7ac9d3e5014089c2e9458f2b6", // Chave de API necessária para autenticação
            language: "pt-BR", // Define o idioma dos resultados como português do Brasil
          },
        });
        
        // Define o estado 'filme' com os detalhes do filme retornados pela API
        setFilme(response.data);

        // Define o estado 'loading' como false para indicar que o carregamento foi concluído
        setLoading(false);
      } catch (error) {
        // Se ocorrer algum erro durante a requisição, exibe uma mensagem no console e redireciona para a página inicial
        console.log("FILME NÃO ENCONTRADO");
        navigate('/', { replace: true }); // Navega para a página inicial substituindo o histórico de navegação
        return;
      }
    }

    // Chama a função para carregar os detalhes do filme assim que o componente é montado ou quando o parâmetro 'id' muda
    loadFilme();

    // Função de limpeza que é executada quando o componente é desmontado
    return () => {
      console.log("Componente foi desmontado");
    };
  }, [navigate, id]); // O array de dependências inclui 'navigate' e 'id' para que o useEffect seja reexecutado quando esses valores mudarem

  // Função para salvar o filme na lista de favoritos
  function salvarFilme() {
    // Obtém a lista de filmes salvos do localStorage
    const minhaLista = localStorage.getItem('@primeflix');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    // Verifica se o filme já está na lista de favoritos
    const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    // Se o filme já estiver na lista de favoritos, exibe uma notificação de aviso e interrompe a função
    if (hasFilmes) {
      toast.warn("Filme já adicionado");
      return;
    }

    // Adiciona o filme à lista de favoritos
    filmesSalvos.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos)); // Salva a lista de filmes atualizada no localStorage
    toast.success('Filme Salvo com sucesso!!'); // Exibe uma notificação de sucesso
  }

  // Renderiza uma mensagem de carregamento enquanto os detalhes do filme estão sendo carregados
  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes do filme...</h1>
      </div>
    );
  }

  // Renderiza os detalhes do filme após o carregamento
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        {/* Botão para salvar o filme na lista de favoritos */}
        <button onClick={salvarFilme}>Salvar</button>
        
        {/* Botão para assistir ao trailer do filme no YouTube */}
        <button>
          <a forget='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  );
}

// Exporta o componente Filme para que possa ser utilizado em outros locais da aplicação
export default Filme;
