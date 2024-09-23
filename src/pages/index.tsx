import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';

const App: React.FC = () => {

  return (
    <div className='app'>
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
};

export default App;
