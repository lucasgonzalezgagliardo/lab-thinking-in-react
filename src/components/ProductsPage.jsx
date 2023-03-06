import { useState } from 'react';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
