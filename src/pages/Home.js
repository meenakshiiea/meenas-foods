import React, { useState } from 'react';

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-600">Meena's Foods</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-purple-100">
              <a href="#" className="block">About Us</a>
            </li>
            <li className="px-4 py-2 hover:bg-purple-100">
              <a href="#" className="block">Products</a>
              <ul className="ml-4 mt-2">
                <li className="px-2 py-1 hover:bg-purple-50">
                  <a href="#" className="block text-sm">Rava Laddu</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Welcome to Meena's Foods</h2>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)} 
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
          >
            🛒
          </button>
        </header>

        {/* Product */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <img src="/api/placeholder/400/300" alt="Rava Laddu" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rava Laddu</h3>
          <p className="text-gray-600 mb-4">Delicious traditional Indian sweet made with semolina and ghee.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">₹150</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Cart sidebar (you can implement this later) */}
      {isCartOpen && (
        <aside className="w-64 bg-white shadow-md fixed right-0 top-0 h-full p-4">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <p>Cart items will appear here</p>
        </aside>
      )}
    </div>
  );
};

export default Home;