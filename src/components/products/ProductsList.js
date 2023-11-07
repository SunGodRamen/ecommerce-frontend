import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with the actual backend endpoint
    fetch('/api/products', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Use the stored token
      },
    })
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
}

export default ProductList;
