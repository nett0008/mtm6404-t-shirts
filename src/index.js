const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]
import React, { useState } from 'react';

const TShirt = ({ title, image, price, stock }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentStock, setCurrentStock] = useState(stock);

  const handleBuy = () => {
    setCurrentStock(currentStock - quantity);
  };

  return (
    <div className="tshirt">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Price: ${price}</p>
      {currentStock > 0 ? (
        <>
          <p>Stock: {currentStock}</p>
          <label>
            Quantity:
            <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
              {[...Array(currentStock).keys()].map(i => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>
          <button onClick={handleBuy}>Buy</button>
        </>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};
