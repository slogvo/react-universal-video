import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            React Universal Video
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-gray-600 transition">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
