import React, { useState, useEffect } from 'react';

// Mock data for farmer produce orders
const ordersData = [
  {
    id: 1,
    status: 'Shipped',
    items: [
      { name: 'Tomatoes', description: 'Fresh organic tomatoes, 5kg', quantity: 1 },
      { name: 'Carrots', description: 'Locally grown carrots, 2kg', quantity: 2 }
    ],
    orderDate: '2024-10-01',
    estimatedDelivery: '2024-10-05',
  },
  {
    id: 2,
    status: 'Pending',
    items: [
      { name: 'Rice', description: 'High-quality rice, 10kg', quantity: 1 },
      { name: 'Beans', description: 'Green beans, 5kg', quantity: 1 }
    ],
    orderDate: '2024-10-05',
    estimatedDelivery: '2024-10-12',
  },
  {
    id: 3,
    status: 'Delivered',
    items: [
      { name: 'Cabbage', description: 'Fresh green cabbage, 3 heads', quantity: 1 },
      { name: 'Bananas', description: 'Ripe bananas, 1 bunch', quantity: 1 }
    ],
    orderDate: '2024-09-15',
    estimatedDelivery: '2024-09-18',
  },
];

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // simulate fetching farmer produce from database
    setOrders(ordersData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Track Your Order</h1>
      <div>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">Order #{order.id}</h3>
              <p className={`mt-2 text-lg ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Shipped' ? 'text-yellow-500' : 'text-red-500'}`}>
                Status: <strong>{order.status}</strong>
              </p>
              <p className="mt-2 text-gray-600">Order Date: {order.orderDate}</p>
              <p className="mt-1 text-gray-600">Estimated Delivery: {order.estimatedDelivery}</p>

              <h4 className="mt-4 text-lg font-semibold text-gray-700">Items:</h4>
              <ul className="list-disc pl-6">
                {order.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <strong>{item.name}</strong> (x{item.quantity}): {item.description}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => alert(`Tracking updates for order ${order.id}`)}
                className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
              >
                Track Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderTracking;