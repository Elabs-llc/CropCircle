import React, { useState } from "react";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";

// Sample orders
const orders = [
  { status: "Delivered", item: "Red Tomato", payment: "Card payment", price: "GH₵182.94", date: "Jan 17, 2022" },
  { status: "Delivered", item: "Pepper", payment: "Card payment", price: "GH₵99.00", date: "Jan 17, 2022" },
  { status: "Pending", item: "Cabbage", payment: "Cash on delivery", price: "GH₵50.00", date: "Jan 18, 2022" },
  { status: "Cancelled", item: "Onions", payment: "Card payment", price: "GH₵120.00", date: "Jan 19, 2022" },
];

export default function OrderTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [ordersList, setOrdersList] = useState(orders);

  // Function to determine the status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-200";
      case "Pending":
        return "bg-yellow-200";
      case "Cancelled":
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  const getDotColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-600";
      case "Pending":
        return "bg-yellow-600";
      case "Cancelled":
        return "bg-red-600";
      default:
        return "bg-gray-600"; 
    }
  };

  // Filter orders based on search term and selected status
  const filteredOrders = ordersList.filter(
    (order) =>
      (order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.payment.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filteredStatus === "All" || order.status === filteredStatus)
  );

  // Handle item removal
  const handleRemoveItem = (index) => {
    const newOrdersList = [...ordersList];
    newOrdersList.splice(index, 1); 
    setOrdersList(newOrdersList);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2 py-2 ">
      <header className="flex justify-between items-center border rounded-lg bg-stone-200 p-1">
        <h1 className="text-3xl font-semibold text-green-700">CropCircle</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for product, customer, etc..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <button className="relative text-gray-600 hover:text-gray-800">
            <FaBell className="h-6 w-6 text-gray-500 hover:text-yellow-500" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              3
            </span>
          </button>

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="h-10 w-10 rounded-full object-cover border-2 border-green-500"
            />
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium">Sarah</p>
              <p className="text-gray-500 text-sm">Welcome back</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold ">Orders</h2>

         
          <select
            value={filteredStatus}
            onChange={(e) => setFilteredStatus(e.target.value)}
            className="border p-2 px-3 py-1 rounded-lg border-gray-300 text-gray-600"
          >
            <option value="All">All</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          {/* Search input */}
          {/* <input
            type="text"
            placeholder="Filter by status, name, etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg border-gray-300 text-gray-600"
          /> */}
        </div>
        <p className="text-gray-500 mb-6">View and track all your orders here.</p>

        <div className="bg-white rounded shadow-md overflow-hidden">
          {filteredOrders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b border-gray-200 border">
              <span className={`flex items-center ${getStatusColor(order.status)} px-3 py-1 rounded-full text-gray-700 font-medium text-xs `}>
                <span className={`w-3 h-2 rounded-full ${getDotColor(order.status)} mr-2`}></span>
                {order.status}
              </span>
              <div className="flex flex-col">
                <span className="text-gray-700 font-medium">{order.item}</span>
                <span className="text-gray-500 text-sm">{order.payment}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-700 font-medium">{order.price}</span>
                <span className="text-gray-500 text-sm">{order.date}</span>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600" 
                onClick={() => handleRemoveItem(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}