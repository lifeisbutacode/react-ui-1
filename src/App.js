import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import List from './components/List';
import Context from './context/ProductContext';

function App() {
  return (
    <div>
      <Context>
        <Header/>
          <div className="container">
            <Product/>
            <List/>
          </div>  
      </Context>
    </div>
  );
}

export default App;
