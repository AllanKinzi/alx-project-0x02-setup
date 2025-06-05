const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
       <a href="/" className="text-white"><h1 className="text-2xl font-bold">Alx Listing App</h1> </a>
      <nav className="flex gap-4">
        <a href="/home" className="text-white">
          Home
        </a>
        <a href="/about" className="text-white">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;