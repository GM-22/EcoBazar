import logo2 from "../assets/Logo2.svg";
import applePayIcon from "../assets/pay.svg";
import visaIcon from "../assets/visa.svg";
import discoverIcon from "../assets/discover.svg";
import mastercardIcon from "../assets/master.svg";
import securePaymentIcon from "../assets/secure.svg";
import Container from "./Container";
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray">
      <Container>
        <div className=" px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[336px_1fr_1fr_1fr_1fr] gap-25">
          {/* Logo & Description */}
          <div>
            <div className=" mb-4">
              <img src={logo2} alt="logo"  />
              
            </div>

            <p className="text-sm leading-6 mb-6">
              Morbi cursus porttitor enim lobortis molestie.
              <br />
              Duis gravida turpis dui, eget bibendum magna
              <br />
              congue nec.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="border-b-2 border-green-500 pb-1 text-white">
                (219) 555-0114
              </span>

              <span>or</span>

              <span className="border-b-2 border-green-500 pb-1 text-white">
                Proxy@gmail.com
              </span>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">My Account</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Helps</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Proxy</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Categories</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#">Fruit & Vegetables</a></li>
              <li><a href="#">Meat & Fish</a></li>
              <li><a href="#">Bread & Bakery</a></li>
              <li><a href="#">Beauty & Health</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[0.5px] border-gray mt-15 pt-7.5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray">
            Sayad Golam Morshed © 2026. All Rights Reserved
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <img src={applePayIcon} alt="Apple Pay" className="h-8" />
            <img src={visaIcon} alt="Visa" className="h-8" />
            <img src={discoverIcon} alt="Discover" className="h-8" />
            <img src={mastercardIcon} alt="Mastercard" className="h-8" />
            <img src={securePaymentIcon} alt="Secure Payment" className="h-8" />
          </div>
        </div>
      </div>
      </Container>
      
    </footer>
  );
};

export default Footer;