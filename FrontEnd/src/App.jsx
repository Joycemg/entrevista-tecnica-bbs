import React, { useState, useEffect } from 'react';
import { product } from '../productdb.js';
import { Item } from './components/Item';
import FormInput from './components/FormInput';
import './App.css';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(product);

  useEffect(() => {
    setTimeout(() => {
      setFilteredProducts(product.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.id.toLowerCase().includes(searchTerm.toLowerCase())));
    }, 3000);
  }, [searchTerm]);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <>
      <FormInput setSearch={handleSearch} />
      <div className="allProducts">
        {filteredProducts.map((product) => (
          <Item product={product} />
        ))}
      </div>
      <p style={{ fontSize: '25px' }}>{filteredProducts.length} resultados</p>
    </>
  );
};

export default ProductList;
