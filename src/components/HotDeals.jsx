import Container from "./Container";
import PopularHeader from "./PopularHeader";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";
import Product4 from "../assets/Product4.jpg";
import Product5 from "../assets/Product5.jpg";
import Product6 from "../assets/Product6.jpg";
import Product7 from "../assets/Product7.jpg";
import Product8 from "../assets/Product8.jpg";
import Product9 from "../assets/Product9.jpg";
import Product10 from "../assets/Product10.jpg";
import { ProductBoxs } from "./PopularProducts";
import tomato from "../assets/tomato.jpg";
import apple from "../assets/apple.jpg";
import mango from "../assets/mango.jpg";
import star from "../assets/Star.svg";


const HotDeals = () => {
  return (
    <section className=" bg-[#F7F7F7] py-15 mb-15 ">
      <Container>
        <PopularHeader title="Hot Deals" viewAll="View All" />
        <div className="grid grid-cols-5 auto-rows-fr">
          <div className="col-span-2 row-span-2 h-[654px] bg-amber-5">
            <FeatureBoxs title="Chinese cabbage" price="$12.00" oldprice="$24.00" image={Product2} sale={true} best={true} />
          </div>
          <ProductBoxs title="Green Chili" price="$34.00" image={Product2} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product3} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product4} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product5} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product6} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product7} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product8} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product9} />
          <ProductBoxs title="Green Chili" price="$34.00" image={Product10} />
          <ProductBoxs title="Green Chili" price="$34.00" image={tomato} />
          <ProductBoxs title="Green Chili" price="$34.00" image={mango} />
        </div>
      </Container>
    </section>
  );
};
const FeatureBoxs = ({ title,  price, oldprice, sale, best }) => {
  return (
    <div className=" bg-white h-[654px] overflow-hidden relative group py-8 px-0  flex flex-col  border border-[#E6E6E6]   items-center justify-center gap-2 hover:shadow-shadowgreens hover:cursor-pointer  hover:shadow-[0_0_18px_rgba(34,197,94,0.45)] transition-all duration-300 ease-in-out">
      <img src={apple} alt={title} className="w-full h-[446px] object-cover" />

      <div className=" text-center  p-3 flex justify-center items-center ">
        <div>
          <h4 className=" group-hover:text-shadowgreens text-[18px] leading-[150%] font-normal text-[#4D4D4D]">
            {title}
          </h4>
          <h3 className=" justify-center mb-1.5 flex gap-1 text-[24px] leading-[150%] font-medium ">
            {price}
            <span className=" text-fullgray ">
              <del>{oldprice}</del>
            </span>
          </h3>
          <ul className="flex justify-center items-center  mb-4.5">
            <li>
              <img className="size-6.5" src={star} alt="Star" />
            </li>
            <li>
              <img className="size-6.5" src={star} alt="Star" />
            </li>
            <li>
              <img className="size-6.5" src={star} alt="Star" />
            </li>
            <li>
              <img className="size-6.5" src={star} alt="Star" />
            </li>
            <li>
              <img className="size-6.5" src={star}  alt="Star" />
            </li>
            <li className=" ml-0 text-[12px] leading-[130%]  pt-2 text-fullgray">(524 Feedback)</li>
          </ul>
          <div className="text-fullgray ">
            <p className="text-[14px] leading-4.5">Hurry up! Offer ends In:</p>
          </div>
          <div className="flex gap-5 justify-center mb-6 text-center">
                <div>
                  <h3 className=" text-[24px] leading-[150%] font-normal">
                    00
                  </h3>
                  <p className="text-[10px] text-gray uppercase mt-1">Days</p>
                </div>
                <div className=" text-gray pt-1">:</div>
                <div>
                  <h3 className=" text-[24px] leading-[150%] font-normal">
                    02
                  </h3>
                  <p className="text-[10px] text-gray uppercase mt-1">Hours</p>
                </div>
                <div className=" text-gray pt-1">:</div>
                <div>
                  <h3 className=" text-[24px] leading-[150%] font-normal">
                    18
                  </h3>
                  <p className="text-[10px] text-gray uppercase mt-1">Mins</p>
                </div>
                <div className=" text-gray pt-1">:</div>
                <div>
                  <h3 className=" text-[24px] leading-[150%] font-normal">
                    46
                  </h3>
                  <p className="text-[10px] text-gray uppercase mt-1">Secs</p>
                </div>
              </div>
          
        </div>
        
      </div>
      {sale && (
        <div className="absolute top-4 left-4 text-white text-[14px] bg-[#EA4B48] px-2 py-1 rounded-[4px]">
          <p>Sale 50%</p>
        </div>
      )}
      {best && (
        <div className="absolute top-4 left-25 text-white text-[14px] bg-[#2388FF] px-2 py-1 rounded-[4px]">
          <p>Best Sale</p>
        </div>
      )}
    </div>
  );
};

export default HotDeals;
