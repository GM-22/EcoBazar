import React from "react";
import Banner from "../assets/PagesBanner.jpg";
import home from "../assets/home.svg";
import { ChevronRightIcon } from "lucide-react";
import Container from "./Container";
const PagesBanner = ({ title }) => {
  return (
    <section  style={{
            backgroundImage: `url(${Banner})`,
          }}>
      <Container>
        <div
          className="w-full items-center bg-cover flex gap-2 py-12 "
         
        >
          <img
            src={home}
            alt="Banner"
            className="size-6 object-cover"
          />
          <ChevronRightIcon className="w-4 h-4 text-[#808080] " />
          <a href="#" className="text-[#00B207] ">
            {title}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PagesBanner;
