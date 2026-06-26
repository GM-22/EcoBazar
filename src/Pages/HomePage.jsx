import Banner from "../components/Banner"
import HotDeals from "../components/HotDeals"
import PopularCategories from "../components/PopularCategories"
import PopularProducts from "../components/PopularProducts"
import BestDeals from "./BestDeals"

const HomePage = () => {
  return (
    <>
      <Banner />
      <PopularCategories />
      <PopularProducts />
      <BestDeals />
      <HotDeals />
    </>
  )
}

export default HomePage