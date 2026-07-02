import React from 'react'
import Container from './Container'
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import post3 from '../assets/post3.jpg'
import post4 from '../assets/post4.jpg'
import post5 from '../assets/post5.jpg'
import post6 from '../assets/post6.jpg'
import insta from '../assets/insta.svg'

const Instagram = () => {
  return (
    <section className='py-15 '>
        <Container>
            <div className="text-center mb-8 ">
          <h3 className="font-semibold text-[32px] leading-[120%] ">
           Follow us on Instagram
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-4">
            <div className='relative'>
                <img src={post1} alt="Instagram 1" className='h-[200px] w-[200px] object-cover rounded-lg' />
                <div className='absolute top-0 left-0 h-[200px] w-[200px] inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
            <div className='relative'>
                <img src={post2} alt="Instagram 2" className='h-[200px] w-[200px]    object-cover rounded-lg' />
             <div className='absolute top-0 left-0 h-[200px] w-[200px] inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
            <div className='relative'>
                <img src={post3} alt="Instagram 3" className='h-[200px] w-[200px] object-cover rounded-lg' />\
                <div className='absolute top-0 left-0 h-[200px] w-[200px] inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
            <div className='relative'>
                <img src={post4} alt="Instagram 4" className='h-[200px] w-[200px] object-cover rounded-lg' />
                <div className='absolute top-0 left-0 h-[200px] w-[200px] inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
            <div className='relative'>
                <img src={post5} alt="Instagram 5" className='h-[200px] w-[200px] object-cover rounded-lg' />
                <div className='absolute top-0 left-0 h-[200px] w-[200px]    inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
            <div className='relative'>
                <img src={post6} alt="Instagram 6" className='h-[200px] w-[200px] object-cover rounded-lg' />
                <div className='absolute top-0 left-0 h-[200px] w-[200px]    inset-0 bg-[#2B572E]/80 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <img src={insta} alt="Instagram Icon" className='size-8' />
                </div>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Instagram