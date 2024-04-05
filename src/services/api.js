// Importa o pacote axios para fazer requisições HTTP
import axios from "axios";

// Cria uma instância do axios com a URL base configurada para a API The Movie Database
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/", // Define a URL base para todas as requisições
});

// Exporta a instância do axios configurada com a URL base para que possa ser utilizada em outros locais da aplicação
export default api;
