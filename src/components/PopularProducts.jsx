import React from "react";
import Container from "./Container";
import PopularHeader from "./PopularHeader";
import star from "../assets/star.svg";
import whitestar from "../assets/whitestart.svg";
import Bag from "../assets/Bag.svg";
import Product1 from "../assets/Product1.jpg";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";
import Product4 from "../assets/Product4.jpg";
import Product5 from "../assets/Product5.jpg";
import Product6 from "../assets/Product6.jpg";
import Product7 from "../assets/Product7.jpg";
import Product8 from "../assets/Product8.jpg";
import Product9 from "../assets/Product9.jpg";
import Product10 from "../assets/Product10.jpg";


const PopularProducts = () => {
  return (
    <section className="mb-15">
      <Container>
        <PopularHeader title="Popular Products" viewAll="View All" />
        <div className="grid grid-cols-5">
          <ProductBoxs
              sale={true}
            title="Green Apple"
            price="$14.99"
            oldprice="$20.99"
            image={Product1}
          />
          <ProductBoxs
            
            title="Fresh Indian Malta"
            price="$20.00"
            image={Product2}
          />
          <ProductBoxs
            
            title="Chinese cabbage"
            price="$12.00"
            image={Product3}
          />
          <ProductBoxs
            
            title="Green Lettuce"
            price="$9.00"
            image={Product4}
          />
          <ProductBoxs
            
            title="Eggplant"
            price="$34.00"
            image={Product5}
          />
          <ProductBoxs
            
            title="Big Potatoes"
            price="$20.00"
            image={Product6}
          />
          <ProductBoxs
              sale={true}
            title="Corne"
            price="$20.00"
            image={Product7}
          />
          <ProductBoxs
             
            title="Fresh Cauliflower"
            price="$12.00"
            image={Product8}
          />
          <ProductBoxs
            
            title="Green Capsicum"
            price="$9.00"
            oldprice="$20.00"
            image={Product9}
          />
          <ProductBoxs
            
            title="Green Chili"
            price="$34.00"
            image={Product10}
          />
        </div>

      </Container>
    </section>
  );
};
export const ProductBoxs = ({ title, image, price, oldprice, sale }) => {
  return (
    <div className=" bg-white relative group py-8 px-5  flex flex-col  border border-[#E6E6E6]  h-[327px] w-[264px] items-center justify-center gap-2 hover:shadow-shadowgreens hover:cursor-pointer  hover:shadow-[0_0_18px_rgba(34,197,94,0.45)] transition-all duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="w-[264px] h-[87px] p-3 flex justify-between items-center ">
        <div>
          <h4 className=" group-hover:text-shadowgreens text-[14px] leading-[150%] font-normal text-[#4D4D4D]">
            {title}
          </h4>
          <h3 className=" mb-1.5 flex gap-1 text-[16px] leading-[150%] font-medium ">
            {price}
            <span className=" text-fullgray ">
              <del>{oldprice}</del>
            </span>
          </h3>
          <ul className="flex">
            <li>
              <img src={star} alt="Star" />
            </li>
            <li>
              <img src={star} alt="Star" />
            </li>
            <li>
              <img src={star} alt="Star" />
            </li>
            <li>
              <img src={star} alt="Star" />
            </li>
            <li>
              <img src={whitestar} alt="Star" />
            </li>
          </ul>
        </div>
        <div>
          <button className=" p-2.5 size-10 bg-[#F2F2F2] rounded-full  group-hover:bg-[#85d49a] transition-all duration-300 ease-in-out">
            <img className="size-5 " src={Bag} alt="" />
          </button>
        </div>
      </div>
      {sale && (
        <div className="absolute top-4 left-4 text-white text-[14px] bg-[#EA4B48] px-2 py-1 rounded-[4px]">
          <p>Sale 50%</p>
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
