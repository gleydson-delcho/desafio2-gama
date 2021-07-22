import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <App />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
