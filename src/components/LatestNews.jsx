import { ArrowRight } from "lucide-react";
import Container from "./Container";
import latest1 from "../assets/latest1.jpg";
import latest2 from "../assets/latest2.jpg";
import latest3 from "../assets/latest3.jpg";
import food from "../assets/food.svg";
import admin from "../assets/admin.svg";
import comment from "../assets/comment.svg";

const LatestNews = () => {
  return (
    <section className="mb-15">
      <Container>
        <div className="text-center mb-8 ">
          <h3 className="font-semibold text-[32px] leading-[120%] ">
            Latest News
          </h3>
        </div>
        <div className="grid grid-cols-3">
          <BlogCard
            img={latest1}
            title={
              "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
            }
            day={'18'}
            month={'Nov'}
          />
          <BlogCard
            img={latest2}
            title={
              "Eget lobortis lorem lacinia. Vivamus pharetra semper,"
            }
            day={'29'}
            month={'Jan'}
          />
          <BlogCard
            img={latest3}
            title={
              "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
            }
            day={'21'}
            month={'Feb'}
          />
        </div>
      </Container>
    </section>
  );
};
const BlogCard = ({img, title, day, month}) => {
  return (
    <div className="w-[424px] overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Image */}
      <div className="relative">
        <img src={img} alt="Orange" className="h-[260px] w-full object-cover" />

        {/* Date */}
        <div className="absolute bottom-4 left-4 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-md bg-white shadow">
          <h2 className="text-[20px] font-semibold leading-none text-[#1A1A1A]">
            {day}
          </h2>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#808080]">
            {month}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-[14px] text-[#808080]">
          <div className="flex items-center gap-1">
            <img src={food} alt="" />
            <span>Food</span>
          </div>

          <div className="flex items-center gap-1">
             <img src={admin} alt="" />
            <span>By Admin</span>
          </div>

          <div className="flex items-center gap-1">
             <img src={comment} alt="" />
            <span>65 Comments</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-2 text-[18px] font-medium leading-[150%] text-[#2C742F]">
          {title}
        </h2>

        {/* Button */}
        <button className="mt-5 flex items-center gap-2 text-[16px] font-semibold text-[#00B207] transition-all hover:gap-3">
          Read More <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
