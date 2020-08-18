import React from 'react';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import store from './store/store';
import theme from './utils/theme';
import Header from './component/Header';
import Footer from './component/Footer';
import loadable from './utils/loadable';

const Main = loadable(() => import('./container/Main'));


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
