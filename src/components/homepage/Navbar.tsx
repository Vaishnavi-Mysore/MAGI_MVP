// Sample page to find the effectiveness in redux setup
import { Link } from 'react-router-dom';
import MagiLogo from '../../assets/images/logo/magi-logo-beta.png';
import NavbarSignInButton from './handlers/NavbarSignInButton';

const Navbar = () => {

  console.log("Navbar rendered");

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-800">
        <img src={MagiLogo} alt="Magi Logo" className="h-8 inline-block mr-2" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/" className="hover:text-blue-600">
          About
        </Link>
      </div>

      {/* Sign In Button */}
      <div className="ml-auto md:ml-0">
        {/* API Logics and the button styles in here */}
        <NavbarSignInButton/>
      </div>
    </nav>
  );
};

export default Navbar;
