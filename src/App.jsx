import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
