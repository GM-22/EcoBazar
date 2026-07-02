import React from "react";
import Container from "./Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Coma from "../assets/Coma.svg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import star from "../assets/star.svg";

const Testimonials = () => {
  return (
    <section className=" bg-[#F2F2F2] py-15 ">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] font-semibold leading-[120%] ">
            Client Testimonials
          </h2>
          <div className="flex gap-4">
            <span className="size-11.5 rounded-full bg-white py-3 px-3 hover:bg-greens hover:text-white">
              <ArrowLeft />
            </span>
            <span className="size-11.5 rounded-full bg-white py-3 px-3 hover:bg-greens hover:text-white">
              {" "}
              <ArrowRight />
            </span>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          <TestimonialCard
            name="Robert Fox"
            title="Customer"
            img={img1}
            testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          />
          <TestimonialCard
            name="Robert Fox"
            title="Customer"
            img={img2}
            testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          />
          <TestimonialCard
            name="Robert Fox"
            title="Customer"
            img={img3}
            testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          />
        </div>
      </Container>
    </section>
  );
};

const TestimonialCard = ({name, img, title, testimonial }) => {
  return (
    <div className="w-[424px] rounded-lg bg-white p-6 shadow-md">
            {/* Quote Icon */}
            <img src={Coma} alt="Quote" className="opacity-80" />

            {/* Review */}
            <p className="mt-4 text-[14px] leading-[150%] text-[#4D4D4D]">
              {testimonial}
            </p>

            {/* Bottom Section */}
            <div className="mt-4 flex items-center justify-between">
              {/* Customer */}
              <div className="flex items-center gap-4">
                <img
                  src={img}
                  alt="Customer"
                  className="size-[56px] rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[16px] font-medium text-[#1A1A1A]">
                    {name}
                  </h3>
                  <p className="text-[14px] text-[#999999]">{title}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 ">
                <img className="size-5" src={star} alt="Star" />
                <img className="size-5" src={star} alt="Star" />
                <img className="size-5" src={star} alt="Star" />
                <img className="size-5" src={star} alt="Star" />
                <img className="size-5" src={star} alt="Star" />
              </div>
            </div>
          </div>
  );
};

export default Testimonials;
