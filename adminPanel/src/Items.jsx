import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get('http://127.0.0.1:3001/product');
        const data = await response.json();
        console.log(data)
        setInventory(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Products</h2>
      {inventory.map((product, index) => (
        <div key={index} style={styles.product}>
          <h3 style={styles.productName}>{product.name}</h3>
          <p style={styles.productPrice}>Price: ${product.price}</p>
          <p style={styles.productDescription}>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  product: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productName: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#333',
  },
  productDescription: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Inventory;