import React, { useState, useEffect } from 'react';

// Sample T-shirt data (for testing purposes, can be replaced with API)
const fetchTshirts = async () => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'T-Shirt 1', image: 'https://via.placeholder.com/150', price: 20, stock: 10 },
        { id: 2, title: 'T-Shirt 2', image: 'https://via.placeholder.com/150', price: 25, stock: 0 },
        { id: 3, title: 'T-Shirt 3', image: 'https://via.placeholder.com/150', price: 30, stock: 5 },
      ]);
    }, 1000);
  });
};

function App() {
  const [tshirts, setTshirts] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  const handleBuy = (id, quantity) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) =>
        tshirt.id === id
          ? { ...tshirt, stock: tshirt.stock - quantity }
          : tshirt
      )
    );
  };

  useEffect(() => {
    const loadTshirts = async () => {
      try {
        const data = await fetchTshirts();
        setTshirts(data);
      } catch (err) {
        setError('Failed to fetch T-shirts'); // Handle any errors that occur
        console.error(err); // Log the error for debugging
      }
    };

    loadTshirts();
  }, []);

  return (
    <div className="App">
      <h1>T-Shirt Store</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {tshirts.map((tshirt) => (
          <div key={tshirt.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <h2>{tshirt.title}</h2>
            <img src={tshirt.image} alt={tshirt.title} style={{ width: '100%' }} />
            <p>Price: ${tshirt.price}</p>
            <p>Stock: {tshirt.stock > 0 ? tshirt.stock : 'Out of Stock'}</p>
            {tshirt.stock > 0 ? (
              <>
                <select id={`quantity-${tshirt.id}`} defaultValue="1">
                  {[...Array(tshirt.stock).keys()].map((x) => (
                    <option key={x} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(tshirt.id, parseInt(document.getElementById(`quantity-${tshirt.id}`).value))}>
                  Buy
                </button>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
