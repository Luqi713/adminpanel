import { useState } from 'react'
import './App.css'
import AddProduct from './AddProduct';
import Inventory from './Items';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="admin-panel-container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => handleMenuClick('addProduct')}>Add Product</li>
          <li onClick={() => handleMenuClick('viewOrders')}>View Orders</li>
          <li onClick={() => handleMenuClick('completedOrders')}>Completed Orders</li>
          <li onClick={() => handleMenuClick('Products')}>Product</li>
          <li onClick={() => handleMenuClick('customers')}>Customers</li>
        </ul>
      </aside>
      <main className="content">
        {selectedOption && (
          <div className="selected-option">
            {/* Render selected option content */}
            {selectedOption === 'addProduct' && <AddProduct/>}
            {selectedOption === 'Products' && <Inventory/>}
            {selectedOption === 'viewOrders' && <h2>View Orders</h2>}
            {selectedOption === 'completedOrders' && <h2>Completed Orders</h2>}
            {selectedOption === 'customers' && <h2>Customers</h2>}
          </div>
        )}
      </main>
    </div>
  );
}

export default App
