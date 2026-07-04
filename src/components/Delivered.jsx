import React from 'react'
import Container from './Container'
import check from '../assets/check.svg'
import { ArrowRight } from 'lucide-react'
import trusted3 from '../assets/trusted3.svg'

const Delivered = () => {
  return (
  <section className='pt-20'>
    <Container>
        <div className='flex gap-[29px]'>
             <div className="max-w-[552px] pb-[95px]">

        {/* Heading */}
        <h2 className="text-[48px] font-semibold leading-[120%] text-[#1A1A1A]">
          We Delivered, You
          <br />
          Enjoy Your Order.
        </h2>

        {/* Description */}
        <p className="mt-6 text-[16px] leading-[150%] text-[#666666]">
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
          ultrices consectetur velit dapibus eu. Mauris sollicitudin
          dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
          bibendum nunc eget elementum.
        </p>

        {/* List */}
        <div className="mt-5 space-y-6">

          <div className="flex  items-center gap-2">
            <div className=" ">
              <img src={check} alt="Check" />
            </div>
            <p className="text-[14px] text-[#666666]">
              Sed in metus pellentesque.
            </p>
          </div>

         <div className="flex  items-center gap-2">
            <div className=" ">
              <img src={check} alt="Check" />
            </div>
            <p className="text-[14px] text-[#666666]">
             Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </p>
          </div>

         <div className="flex  items-center gap-2">
            <div className=" ">
              <img src={check} alt="Check" />
            </div>
            <p className="text-[14px] text-[#666666]">
              Maecenas ut nunc fringilla erat varius.
            </p>
          </div>

        </div>

        {/* Button */}
        <button className="mt-6 bg-greens text-white font-semibold px-10 py-4 rounded-[43px] flex items-center gap-4 hover:bg-green-500 hover:text-white duration-300">
                Shop Now <ArrowRight />
              </button>

      </div>
            <div >
                <img className='w-full h-full object-cover' src={trusted3} alt="Delivered" />
            </div>
        </div>
    </Container>
  </section>
  )
}

export default Delivered