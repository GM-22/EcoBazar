import Banner from "../components/Banner"
import Discount from "../components/Discount"
import FeaturedProducts from "../components/FeaturedProducts"
import HotDeals from "../components/HotDeals"
import Instagram from "../components/Instagram"
import LatestNews from "../components/LatestNews"
import PopularCategories from "../components/PopularCategories"
import PopularProducts from "../components/PopularProducts"
import Subscribe from "../components/Subscribe"
import Testimonials from "../components/Testimonials"
import BestDeals from "./BestDeals"

const HomePage = () => {
  return (
    <>
      <Banner />
      <PopularCategories />
      <PopularProducts />
      <BestDeals />
      <HotDeals />
      <Discount />
      <FeaturedProducts />
      <LatestNews />
      <Testimonials />
      <Instagram />
      <Subscribe />
    </>
  )
}

export default HomePage