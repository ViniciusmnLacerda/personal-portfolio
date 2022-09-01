import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BackgroundAnimation from './components/BackgroundAnimation';
import './index.css';
import theme from './styles/Theme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <BackgroundAnimation>
        <App />
      </BackgroundAnimation>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
