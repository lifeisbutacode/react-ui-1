import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import List from './components/List';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Product/>
        <List/>
      </div>  
    </div>
  );
}

export default App;
