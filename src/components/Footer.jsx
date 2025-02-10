const Footer = () => {
  return (
    <footer className="w-full bg-white text-black p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
          <p className="text-gray-600 mt-2">
            I would be happiest person to work with more and more people.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl">💬</a>
            <a href="#" className="text-xl">📘</a>
            <a href="#" className="text-xl">🎨</a>
            <a href="#" className="text-xl">📷</a>
            <a href="#" className="text-xl">🅱️</a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded mb-2"
          />
          <button className="w-full bg-black text-white p-3 rounded">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
