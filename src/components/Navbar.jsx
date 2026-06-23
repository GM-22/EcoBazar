import Container from "./Container";
import locationIcon from "../assets/Location.svg";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import favouriteIcon from "../assets/favourite.svg";
import cartIcon from "../assets/bag.svg";

import { ChevronDown } from "lucide-react";
import CallIcon from "../assets/call.svg";

const Navbar = () => {
  return (
    <header>
       
        <Topbar />
        <Mainbar />
        <Nav_bar />
        
       
      
    
    </header>
  );
};

const Topbar = () => {
  return (
    <div className="text-choclate border-b py-1 h-[42px] border-gray-200">
        <Container>
            <div className=" h-8 flex items-center justify-between text-[12px] ">
            <div className="flex items-center gap-2">
              <img src={locationIcon} alt="location" className="" />
              <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-transparent outline-none">
                <option>Eng</option>
              </select>
              <select className="bg-transparent outline-none">
                <option>USD</option>
              </select>
              <a href="#" className="hover:text-green-600">
                Sign In / Sign Up
              </a>
            </div>
          </div>
        </Container>
        </div>
  );
};
const Mainbar = () => {
  return (
 
        <div >
          <Container>
              <div className="  px-0 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="">
              <img src={logo} alt="Logo" className="" />
            </div>
            {/* Search */}
            <div className="flex w-[520px]">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full  h-13 border border-gray-300 rounded-l-md pl-10 pr-4 outline-none focus:border-green-500"
                />
                <img src={searchIcon} alt="search" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="px-6 py-3.5 bg-green-600 text-white font-medium rounded-r-md hover:bg-green-700">
                Search
              </button>
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-5">
              <button>
                <img
                  src={favouriteIcon}
                  alt="favourite"
                  className=""
                />
              </button>
              <div className="w-px h-8 bg-gray-300" />
              <button>
                <img
                  src={cartIcon}
                  alt="cart"
                  className=""
                >
                 
                </img>
              </button>
              <div className="text-sm">
                <p className="text-gray-500">Shopping cart:</p>
                <p className="font-semibold">$57.00</p>
              </div>
            </div>
          </div>
          </Container>
          
        </div>
   
  );
};
const Nav_bar = () => {
  return (
  
        <nav className="bg-darkgray text-white">
         <Container>
           <div className=" py-5 text-[14px] font-medium flex items-center justify-between">
            <ul className="flex items-center text-fornav gap-8 text-sm">
              <li>
                <a href="#" className="flex items-center hover:text-white gap-1">
                  <span>Home</span> <ChevronDown />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white gap-1">
                  <span>Shop</span> <ChevronDown />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white gap-1">
                  <span>Pages</span> <ChevronDown />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white gap-1">
                  <span>Blog</span> <ChevronDown />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white gap-1">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="flex items-center gap-2 text-sm">
              <img src={CallIcon} alt="location" className="w-4 h-4" />
              <span>(219) 555-0114</span>
            </div>
          </div>
         </Container>
        </nav>
  );
};

export default Navbar;
