
import Container from "../components/Container";
import Deal1 from "../assets/Deal1.jpg";
import Deal2 from "../assets/Deal2.jpg";
import Deal3 from "../assets/Deal3.jpg";
import { ArrowRight } from "lucide-react";

const BestDeals = () => {
  return (
    <section className="mb-15">
      <Container>
        <div className="grid grid-cols-3">
          <div
            className="  h-[536px] w-[424px] bg-cover"
            style={{ backgroundImage: `url(${Deal1})` }}
          >
            <div className=" pt-[35px] text-white flex flex-col items-center justify-center">
              <p className=" mb-4 uppercase text-center text-[14px] font-medium tracking-[3%] leading-[100%]">
                Best Deals
              </p>

              <h2 className="text-[40px] text-white leading-[120%] font-semibold mt-2">
                Sale of the Month
              </h2>

              <div className="flex gap-2 text-center">
                <div>
                  <h3 className="  text-white  text-[24px] leading-[150%] font-normal">
                    00
                  </h3>
                  <p className="text-[12px] uppercase mt-1">Days</p>
                </div>
                <div className=" text-white/60 pt-1">:</div>
                <div>
                  <h3 className="  text-white  text-[24px] leading-[150%] font-normal">
                    02
                  </h3>
                  <p className="text-xs uppercase mt-1">Hours</p>
                </div>
                <div className=" text-white/60 pt-1">:</div>
                <div>
                  <h3 className="  text-white  text-[24px] leading-[150%] font-normal">
                    18
                  </h3>
                  <p className="text-xs uppercase mt-1">Mins</p>
                </div>
                <div className=" text-white/60 pt-1">:</div>
                <div>
                  <h3 className=" text-white  text-[24px] leading-[150%] font-normal">
                    46
                  </h3>
                  <p className="text-xs uppercase mt-1">Secs</p>
                </div>
              </div>

              <button className="mt-6 bg-white text-green-600 font-semibold px-8 py-3.5 rounded-[43px] flex items-center gap-2 hover:bg-green-500 hover:text-white duration-300">
                Shop Now <ArrowRight />
              </button>
            </div>
          </div>
          <div
            className="  h-[536px] w-[424px] bg-cover"
            style={{ backgroundImage: `url(${Deal3})` }}
          >
            <div className=" pt-[35px] rounded-lg bg-black text-white flex flex-col items-center justify-center">
              <p className=" mb-4 uppercase text-center text-[14px] font-medium tracking-[3%] leading-[100%]">
                85% Fat Free
              </p>

              <h2 className="text-[40px] text-white leading-[120%] font-semibold mt-2">
                Low-Fat Meat
              </h2>
              <p className="text-[18px] mt-3">
                Started at
                <span className="text-[#FF8A00] font-bold ml-2">$79.99</span>
              </p>

              <button className="mt-6 bg-white text-green-600 font-semibold px-8 py-3.5 rounded-[43px] flex items-center gap-2 hover:bg-green-500 hover:text-white duration-300">
                Shop Now <ArrowRight />
              </button>
            </div>
          </div>
          <div
            className="  h-[536px] w-[424px] bg-cover"
            style={{ backgroundImage: `url(${Deal2})` }}
          >
            <div className=" pt-[35px] text-center flex flex-col items-center justify-center">
              <p className=" mb-4 uppercase text-black text-center text-[14px] font-medium tracking-[3%] leading-[100%]">
                Summer Sale
              </p>

              <h2 className="text-[40px] leading-[120%] font-semibold mt-2">
                100% Fresh Fruit
              </h2>

              <div className="flex items-center gap-3 ">
                <span className="text-2xl">Up to</span>

                <span className="bg-black text-[#FDC700] px-4 py-2 rounded font-bold text-xl">
                  64% OFF
                </span>
              </div>

              <button className="mt-6 bg-white text-green-600 font-semibold px-7 py-3 rounded-full flex items-center gap-2 hover:bg-green-500 hover:text-white duration-300">
                Shop Now <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestDeals;
