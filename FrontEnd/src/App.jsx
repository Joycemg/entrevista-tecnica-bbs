import React, { useState, useEffect } from 'react';
import { product } from '../productdb.js';
import './App.css';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(product);

  useEffect(() => {
    setTimeout(() => {
      setFilteredProducts(product.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.id.toLowerCase().includes(searchTerm.toLowerCase())));
    }, 3000);
  }, [searchTerm]);

  return (
    <>
      <div className="inputBox">
        <input className="input" type="text" placeholder="Buscar por nombre o código de producto" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {console.log(filteredProducts)}
    </>
  );
};

export default ProductList;
