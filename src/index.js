// Importa as bibliotecas necessárias do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o arquivo CSS principal
import './index.css';

// Importa o componente principal da aplicação
import App from './App';

// Cria uma raiz React com ReactDOM.createRoot() e renderiza o aplicativo dentro dela
// Este método é uma forma experimental de renderização assíncrona disponível no React.
// Ele retorna uma raiz React que pode ser utilizada para renderizar árvores de componentes React.
// Aqui, estamos criando uma raiz React no elemento com o ID 'root' no DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro da raiz React criada acima
// O componente App está envolvido em <React.StrictMode>, que é usado para destacar potenciais problemas na aplicação durante o desenvolvimento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);