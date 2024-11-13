const AddProductForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
      <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
            Add Product
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <p className="text-sm sm:text-lg text-gray-500 text-center mb-4">
          Kindly fill out this form to add your products.
        </p>
        <form action="" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-lg h-10 px-3 w-full outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="text-gray-700">
                Product Category
              </label>
              <input
                type="text"
                id="category"
                className="border rounded-lg h-10 px-3 w-full outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="text-gray-700">
              Product Description
            </label>
            <textarea
              id="description"
              className="border rounded-lg px-3 py-2 w-full h-24 outline-none resize-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="text-gray-700">
                Price per Product
              </label>
              <input
                type="text"
                id="price"
                className="border rounded-lg h-10 px-3 w-full outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="image" className="text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                className="border rounded-lg h-10 px-3 w-full outline-none focus:ring-2 focus:ring-green-500"
                accept="image/*"
              />
            </div>
          </div>
          <div>
            <label htmlFor="quantity" className="text-gray-700">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              className="border rounded-lg h-10 px-3 w-full outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="agreement"
              className="rounded text-green-600"
            />
            <label htmlFor="agreement" className="text-gray-600">
              You agree to our friendly{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
