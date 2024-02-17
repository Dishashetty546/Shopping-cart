// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Stylish T-Shirt', category: 'Men', price: 25, image: 'tshirt.jpg' },
    { id: 2, name: 'Elegant Dress', category: 'Women', price: 45, image: 'dress.jpg' },
    { id: 3, name: 'Sneakers', category: 'Men', price: 60, image: 'sneakers.jpg' },
    { id: 4, name: 'Handbag', category: 'Women', price: 50, image: 'handbag.jpg' },
    { id: 5, name: 'Watch', category: 'Men', price: 80, image: 'watch.jpg' },
    { id: 6, name: 'Necklace', category: 'Women', price: 35, image: 'necklace.jpg' },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterByCategory = (category) => {
    if (category === 'All') {
      setProducts([
        { id: 1, name: 'Stylish T-Shirt', category: 'Men', price: 25, image: 'shopping_cart/src/baG.JPEG' },
        { id: 2, name: 'Elegant Dress', category: 'Women', price: 45, image: 'dress.jpg' },
        { id: 3, name: 'Sneakers', category: 'Men', price: 60, image: 'sneakers.jpg' },
        { id: 4, name: 'Handbag', category: 'Women', price: 50, image: 'handbag.jpg' },
        { id: 5, name: 'Watch', category: 'Men', price: 80, image: 'watch.jpg' },
        { id: 6, name: 'Necklace', category: 'Women', price: 35, image: 'necklace.jpg' },
      ]);
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Fashion Store</h1>
        <nav>
          <ul>
            <li onClick={() => filterByCategory('All')}>All</li>
            <li onClick={() => filterByCategory('Men')}>Men</li>
            <li onClick={() => filterByCategory('Women')}>Women</li>
          </ul>
        </nav>
      </header>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
