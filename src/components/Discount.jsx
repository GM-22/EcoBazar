
import Container from './Container'
import discount from '../assets/DiscountBannar.jpg'
import { ArrowRight } from 'lucide-react'

const Discount = () => {
  return (
    <section className='mb-15'>
        <Container>
            <div
            className=' text-white h-[358px] pt-15 pl-[828px]'
            style={{backgroundImage:`url(${discount})` }}
            
            >
                <p className='font-medium text-[16px] leading-[100%] tracking-[2%] mb-3 '>Summer Sale</p>
                <span className='flex gap-2 mb-4'>
                    <span className= ' font-medium text-[#FF8A00] text-[56px] leading-[120%]'>37%</span>
                    <p className=' text-[56px] leading-[120%]  '>OFF</p>
                </span>
                <p className=' max-w-[441px] text-white/70 mb-7 text-[16px] leading-[150%] '>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                <button className="mt-6 bg-greens text-white font-semibold px-8 py-3.5 rounded-[43px] flex items-center gap-2 hover:bg-green-500 hover:text-white duration-300">
                Shop Now <ArrowRight />
              </button>
            </div>
        </Container>
    </section>
  )
}

export default Discount