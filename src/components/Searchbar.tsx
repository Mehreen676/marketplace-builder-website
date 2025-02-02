'use client'


// components/SearchBar.tsx
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
}

interface SearchBarProps {
  products: Product[];
  onSearch: (filteredProducts: Product[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products based on the search term
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filteredProducts);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for shoes..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;