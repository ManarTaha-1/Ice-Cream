import { useState } from "react";
import HeaderIce from "../assets/header.png";
import Heart from "../assets/Heart.png";
import shopping_cart from "../assets/shopping-cart.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-4 sm:top-6 left-1/2 -translate-x-1/2
        z-50
        w-[95%] sm:w-[90%] max-w-5xl
      "
    >
      {/* Main Header */}
      <div
        className="
          flex items-center justify-between
          bg-white/95 backdrop-blur-md
          px-4 sm:px-6 lg:px-10
          h-16 sm:h-18 lg:h-20
          border-2 border-black
          rounded-full
          font-bold
          shadow-lg
          transition-all duration-300
        "
      >
        {/* Desktop Left Links */}
        <ul className="hidden lg:flex gap-10 text-lg">
          <li>
            <a 
              href="#home" 
              className="
                relative
                hover:text-yellow-500 
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-0.5
                after:bg-yellow-500
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="
                relative
                hover:text-yellow-500 
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-0.5
                after:bg-yellow-500
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#products" 
              className="
                relative
                hover:text-pink-200 
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-0.5
                after:bg-yellow-500
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Products
            </a>
          </li>
        </ul>

        {/* Logo */}
        <img
          src={HeaderIce}
          alt="Logo"
          className="w-16 sm:w-20 lg:w-32 flex-shrink-0 transition-transform duration-300 hover:scale-110"
        />

        {/* Desktop Right */}
        <ul className="hidden lg:flex gap-8 items-center text-lg">
          <li>
            <a 
              href="#flavors" 
              className="
                relative
                hover:text-yellow-500 
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-0.5
                after:bg-yellow-500
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Flavors
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="
                relative
                hover:text-yellow-500 
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-0.5
                after:bg-yellow-500
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Contact
            </a>
          </li>
          <li>
            <button className="hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300">
              <img src={Heart} alt="Favorites" className="w-7 h-7" />
            </button>
          </li>
          <li>
            <button className="hover:scale-110 hover:-rotate-12 active:scale-95 transition-all duration-300">
              <img src={shopping_cart} alt="Cart" className="w-8 h-8" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button - Animated Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden 
            w-10 h-10
            flex flex-col items-center justify-center
            gap-1.5
            relative
            group
          "
          aria-label="Toggle menu"
        >
          <span 
            className={`
              block w-6 h-0.5 bg-black rounded-full
              transition-all duration-300 ease-in-out
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}
              group-hover:bg-yellow-500
            `}
          />
          <span 
            className={`
              block w-6 h-0.5 bg-black rounded-full
              transition-all duration-300 ease-in-out
              ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
              group-hover:bg-yellow-500
            `}
          />
          <span 
            className={`
              block w-6 h-0.5 bg-black rounded-full
              transition-all duration-300 ease-in-out
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
              group-hover:bg-yellow-500
            `}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          mt-3 sm:mt-4
          bg-gradient-to-br from-white to-yellow-50
          border-2 border-black
          rounded-3xl
          text-center
          flex
          flex-col
          font-bold
          shadow-xl
          overflow-hidden
          transition-all duration-500 ease-out
          ${menuOpen 
            ? 'max-h-[600px] opacity-100 p-6 sm:p-8' 
            : 'max-h-0 opacity-0 p-0'
          }
        `}
      >
        <div className="space-y-2">
          <a 
            href="#home" 
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-lg sm:text-xl 
              transition-all duration-300
              py-3 px-4 rounded-xl
              hover:bg-yellow-100
              hover:scale-105
              hover:text-yellow-600
              active:scale-95
            "
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-lg sm:text-xl 
              transition-all duration-300
              py-3 px-4 rounded-xl
              hover:bg-yellow-100
              hover:scale-105
              hover:text-yellow-600
              active:scale-95
            "
          >
            About Us
          </a>
          <a 
            href="#products" 
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-lg sm:text-xl 
              transition-all duration-300
              py-3 px-4 rounded-xl
              hover:bg-yellow-100
              hover:scale-105
              hover:text-yellow-600
              active:scale-95
            "
          >
            Products
          </a>
          <a 
            href="#flavors" 
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-lg sm:text-xl 
              transition-all duration-300
              py-3 px-4 rounded-xl
              hover:bg-yellow-100
              hover:scale-105
              hover:text-yellow-600
              active:scale-95
            "
          >
            Flavors
          </a>
          <a 
            href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-lg sm:text-xl 
              transition-all duration-300
              py-3 px-4 rounded-xl
              hover:bg-yellow-100
              hover:scale-105
              hover:text-yellow-600
              active:scale-95
            "
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-6 mt-6 border-t-2 border-yellow-200">
          <button className="hover:scale-110 hover:rotate-12 active:scale-95 active:animate-bounce transition-all duration-300">
            <img src={Heart} alt="Favorites" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button className="hover:scale-110 hover:-rotate-12 active:scale-95 active:animate-bounce transition-all duration-300">
            <img src={shopping_cart} alt="Cart" className="w-9 h-9 sm:w-11 sm:h-11" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;