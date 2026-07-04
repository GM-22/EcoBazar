import React from "react";
import Container from "./Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import white_insta from "../assets/white_insta.svg";
import white_fb from "../assets/white_fb.svg";
import white_twitter from "../assets/white_twitter.svg";
import white_printerest from "../assets/white_printerest.svg";

const Team = () => {
  return (
    <section className="h-[696px] py-20 bg-[#E6E6E6] ">
      
        <div className=" max-w-[640px] mb-[50px] mx-auto text-center">
          <h2 className="text-[48px] mb-3 font-semibold leading-[120%] text-[#1A1A1A]">
            Our Awesome Team
          </h2>
          <p className=" text-[16px] leading-[150%] text-[#666666]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>
        <div className=" items-center mx-auto max-w-[1500px] flex gap-6 overflow-x-auto scrollbar-hide">
           <span className="  size-11.5 rounded-full bg-white py-3 px-3 hover:bg-greens hover:text-white">
              <ArrowLeft />
            </span>
            <div className="flex gap-6">
              <Card name="Ceo & Founder" title="Jenny Wilson" img={team1} />
              <Card name="Jane Cooper" title="Worker" img={team2} />
              <Card name="Cody Fisher" title="Security Guardv" img={team3} />
              <Card name="Robert Fox" title="Senior Farmer Manager" img={team4} />
            </div>
            <span className=" size-11.5 rounded-full bg-white py-3 px-3 hover:bg-greens hover:text-white">
              {" "}
              <ArrowRight />
            </span>
        </div>
      
    </section>
  );
};
const Card = ({ name, title, img }) => {
  return (
    <div className="w-[312px] h-[368px] group  bg-white ">
      <div className='relative'>
        <img src={img} alt={name} className="" />
        <div className='absolute top-0 left-0 h-[280px] w-[312px] inset-0 bg-[#000000]/50 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                       <ul className='flex gap-1'>
                         
                         <li className="size-10 rounded-full p-[11px] hover:bg-[#00B207]"><img src={white_fb} alt="Facebook Icon" className='size-4.5' /></li>
                         <li className="size-10 rounded-full p-[11px] hover:bg-[#00B207]"><img src={white_insta} alt="Instagram Icon" className='size-4.5' /></li>
                         <li className="size-10 rounded-full p-[11px] hover:bg-[#00B207]"><img src={white_twitter} alt="Twitter Icon" className='size-4.5' /></li>
                         <li className="size-10 rounded-full p-[11px] hover:bg-[#00B207]"><img src={white_printerest} alt="Pinterest Icon" className='size-4.5' /></li>
                         </ul> 
                       
                        </div>
      </div>
      
     <div className="pt-4 pl-5">
       <h3 className="text-[18px] font-medium leading-[150%] mb-1">{name}</h3>
      <p className="text-[14px] leading-[150%] text-[#808080]">{title}</p>
     </div>
    </div>
  );
};

export default Team;
