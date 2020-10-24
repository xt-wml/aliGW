import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './model/header/index';
import Banner from './model/banner/index';
import Handle from './model/handle/index';
import Bottom from './model/bottom/index';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Handle/>
      <Bottom/>
    </div>
  );
}

export default App;
