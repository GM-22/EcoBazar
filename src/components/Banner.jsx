import Container from "../components/Container";
import hero from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { ArrowRight } from "lucide-react";
import shippingIcon from "../assets/shipping.jpg";
import supportIcon from "../assets/support.jpg";
import paymentIcon from "../assets/shopping.jpg";
import moneyBackIcon from "../assets/box.jpg";



const Banner = () => {
  return (
    <div className="mt-6 mb-15 ">
      <Container>
        <div className="mb-6 grid grid-cols-[872px_1fr] gap-6 justify-between items-center">
          <div>
            <div
              className=" h-[600px] bg-cover py-[155px] pl-[60px] "
              style={{ backgroundImage: `url(${hero})` }}
            >
              <div className="text-white">
                <h1 className="text-5xl font-semibold text-white leading-tight">
                  Fresh & Healthy
                  <br />
                  Organic Food
                </h1>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-[2px] h-14 bg-[#84D187]"></div>

                  <div>
                    <p className="text-2xl font-medium flex items-center gap-2">
                      Sale up to
                      <span className="bg-[#FF8A00] px-3 py-1 rounded text-white font-semibold">
                        30% OFF
                      </span>
                    </p>

                    <p className="text-lg text-gray-200 mt-2">
                      Free shipping on all your order.
                    </p>
                  </div>
                </div>

                <button className="mt-10 bg-white text-greens font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition">
                  Shop now
                  <span> <ArrowRight /> </span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[288px_288px] gap-6">
            <div
              className=" pt-8 pl-8  h-[288px] bg-cover "
              style={{ backgroundImage: `url(${hero2})` }}
            >
                <div>
  <p className="uppercase text-sm tracking-wider text-[#1A1A1A]">
    Summer Sale
  </p>

  <h2 className="text-[32px] font-semibold text-[#1A1A1A] mt-1">
    75% OFF
  </h2>

  <p className="text-gray mt-2">
    Only Fruit & Vegetable
  </p>

  <button className="mt-5 text-greens font-semibold text-[16px] flex items-center gap-3 hover:gap-4 transition-all">
    Shop Now
    <span>→</span>
  </button>
</div>
            </div>
            <div
              className=" h-[288px] py-[67px] px-[40px] bg-cover "
              style={{ backgroundImage: `url(${hero3})` }}
            >
                <div className="text-center text-white">
  <p className="uppercase tracking-widest text-[14px] font-medium">
    Best Deal
  </p>

  <h2 className="text-white text-[32px] font-semibold leading-tight mt-4">
    Special Products
    <br />
    Deal of the Month
  </h2>

  <button className="mt-7 text-greens text-[16px] font-semibold flex items-center justify-center gap-3 mx-auto hover:gap-4 transition-all">
    Shop Now
    <span>→</span>
  </button>
</div>
            </div>
          </div>
        </div>
        <div>
             <div className="mb-15 rounded-lg shadow-xl/20 p-10">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        
        {/* Free Shipping */}
        <div className="flex items-center gap-4">
         <img src={shippingIcon} alt="Free Shipping" className="size-10" />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Free Shipping
            </h3>
            <p className="text-fornav text-sm">
              Free shipping on all your order
            </p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="flex items-center   gap-4">
            <img src={supportIcon} alt="Customer Support" className="size-10" />   
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Customer Support 24/7
            </h3>
            <p className="text-fornav text-sm">
              Instant access to Support
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-4">
          <img src={paymentIcon} alt="Secure Payment" className="size-10" />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              100% Secure Payment
            </h3>
            <p className="text-fornav text-sm">
              We ensure your money is save
            </p>
          </div>
        </div>

        {/* Money Back */}
        <div className="flex items-center gap-4">
          <img src={moneyBackIcon} alt="Money Back" className="size-10" />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Money-Back Guarantee
            </h3>
            <p className="text-fornav text-sm">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>

      </div>
    </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
