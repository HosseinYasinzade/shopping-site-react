const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 md:px-30 w-full h-20">
      <h3 className="text-3xl font-bold">Logo</h3>
      <input
        type="text"
        placeholder="Search for product"
        className="border-b border-green-800 outline-0 hidden md:block"
      />
      <div>
        <button className="bg-green-800 text-white text-lg w-20 h-10 rounded-xl mr-2">
          Login
        </button>
        <button className="bg-green-800 text-white text-lg w-20 h-10 rounded-xl">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
