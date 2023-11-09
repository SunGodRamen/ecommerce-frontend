import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    // Replace with the actual backend endpoint, use the productId in the URL
    fetch(`/api/products/${productId}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      },
    })
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => console.error('Error fetching product:', error));
  }, [productId]); // Depend on productId to refetch when it changes

  if (!product) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render other product details */}
      <p>Price: ${product.price}</p>
      {/* Include more product information as needed */}
    </div>
  );
}

export default ProductPage;
