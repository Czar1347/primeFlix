// Importa o componente de roteamento principal da aplicação
import RoutesApp from "./routes";

// Importa o componente ToastContainer do pacote 'react-toastify'
import { ToastContainer } from 'react-toastify';

// Importa o estilo CSS para o ToastContainer do pacote 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Componente principal da aplicação
function App() {
  return (
    // Renderiza o conteúdo da aplicação
    <div className="App">
      {/* Renderiza o ToastContainer para exibir notificações na aplicação */}
      <ToastContainer autoClose={3000} />
      {/* Renderiza o componente de roteamento principal */}
      <RoutesApp />
    </div>
  );
}

// Exporta o componente App para que possa ser utilizado em outros locais da aplicação
export default App;