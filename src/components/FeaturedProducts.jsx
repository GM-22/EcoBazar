import Container from "./Container"
import PopularHeader from "./PopularHeader"
import { ProductBoxs } from "./PopularProducts"
import Product1 from "../assets/Product1.jpg";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";
import Product4 from "../assets/Product4.jpg";
import Product5 from "../assets/Product5.jpg";

const FeaturedProducts = () => {
  return (
    <section className="mb-15">
        <Container>
            <PopularHeader title={'Featured Products'} viewAll={'View All'} />
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
            </div>
        </Container>
    </section>
  )
}

export default FeaturedProducts