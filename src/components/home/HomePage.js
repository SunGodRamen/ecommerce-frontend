// src/components/home/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../products/ProductList'; // Assuming ProductList is in the same folder

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This should be the actual endpoint where your products are fetched from
    // The endpoint and token handling will depend on how your backend is set up
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products', {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Assuming the JWT is stored in the session
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // Handle errors, for example, redirect to login if the token is invalid
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default HomePage;
