import Container from "./Container";
import PopularHeader from "./PopularHeader";
import Categories1 from "../assets/Categories1.svg";
import Categories2 from "../assets/Categories2.svg";
import Categories3 from "../assets/Categories3.svg";
import Categories4 from "../assets/Categories4.svg";
import Categories5 from "../assets/Categories5.svg";
import Categories6 from "../assets/Categories6.svg";
import Categories7 from "../assets/Categories7.svg";
import Categories8 from "../assets/Categories8.svg";
import Categories9 from "../assets/Categories9.svg";
import Categories10 from "../assets/Categories10.svg";
import Categories11 from "../assets/Categories11.svg";
import Categories12 from "../assets/Categories12.svg";

const PopularCategories = () => {
  return (
    <section className="mb-15">
      <Container>
        <PopularHeader title="Popular Categories" viewAll="View All" />
        <div className="grid grid-cols-6 gap-4 mt-5">
          <Boxs title="Fresh Fruit" image={Categories1} />
          <Boxs title="Fresh Vegetables" image={Categories2} />
          <Boxs title="Meat & Fish" image={Categories3} />
          <Boxs title="Snacks" image={Categories4} />
          <Boxs title="Beverages" image={Categories5} />
          <Boxs title="Beauty & Health" image={Categories6} />
          <Boxs title="Bread & Bakery" image={Categories7} />
          <Boxs title="Baking Needs" image={Categories8} />
          <Boxs title="Cooking" image={Categories9} />
          <Boxs title="Diabetic Food" image={Categories10} />
          <Boxs title="Dish Detergents" image={Categories11} />
          <Boxs title="Oil" image={Categories12} />
        </div>
      </Container>
    </section>
  );
};

const Boxs = ({ title, image }) => {
  return (
    <div className=" group py-5 px-1 shadow-sm flex flex-col rounded-[5px] border border-[#E6E6E6] h-[213px] w-[200px] items-center justify-center gap-2 hover:shadow-shadowgreens hover:cursor-pointer  hover:shadow-[0_0_18px_rgba(34,197,94,0.45)] transition-all duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <h3 className=" group-hover:text-shadowgreens text-[18px] leading-[150%] font-medium">
        {title}
      </h3>
    </div>
  );
};

export default PopularCategories;
