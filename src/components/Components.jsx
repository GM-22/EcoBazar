
import Container from './Container'
import trusted_bg from '../assets/trusted_bg.jpg'
import store1 from '../assets/store1.svg'
import store2 from '../assets/store2.svg'
import store3 from '../assets/store3.svg'
import store4 from '../assets/store4.svg'
import store5 from '../assets/store5.svg'
import store6 from '../assets/store6.svg'

const Components = () => {
  return (
    <section className='my-15 bg-[#FAFAFA]'>
         <div className='bg-cover bg-no-repeat bg-center h-[685px] '
             style={{backgroundImage: `url(${trusted_bg})`}}>
        <Container>
           
                
                 <div className="max-w-7xl mx-auto pl-[672px] py-20">
    {/* Heading */}
    <div className="max-w-xl">
      <h2 className="text-[56px] font-semibold leading-[120%] text-[#002603]">
        100% Trusted
        <br />
        Organic Food Store
      </h2>

      <p className="mt-5 text-[#808080] text-[16px] leading-[150%]">
        Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
        Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a mi.
        Nulla eu eros consequat tortor tincidunt feugiat.
      </p>
    </div>

    {/* Features */}
    <div className="grid grid-cols-2 gap-6  mt-6">
            <Cards img={store1} title="100% Organic food" para="100% healthy & Fresh food." />
            <Cards img={store2} title="Great Support 24/7" para="Instant access to Contact" />
            <Cards img={store3} title="Customer Feedback" para="Our happy customer" />
            <Cards img={store4} title="100% Secure Payment" para="We ensure your money is safe" />
            <Cards img={store5} title="Free Shipping" para="Free shipping with discount" />
            <Cards img={store6} title="100% Organic Food" para="100% healthy & Fresh food." />
         
      </div>
  </div>
           

        </Container>
         </div>
    </section>
  )
}
const Cards = ({img,title,para})=>{
    return(
        <div className="flex items-center  gap-4">
        <div className="  flex items-center justify-center">
          <img src={img} alt={title} className="size-18" />
        </div>

        <div className="py-2">
          <h4 className="font-medium leading-[150%] text-[18px] text-[#1A1A1A]">
            {title}
          </h4>
          <p className=" max-w-[250px] text-[#99999999] text-[14px] leading-[150%] mt-2">
            {para}
          </p>
        </div>
      </div>
    )
}

export default Components