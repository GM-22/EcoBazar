import React from 'react'
import Container from './Container'
import trusted1 from '../assets/Trusted1.jpg'

const Trusted = () => {
  return (
    <section className=' py-20'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <div>
                    <h3 className='text-[56px] leading-[120%] font-semibold '>100% Trusted Organic Food Store</h3>
                    <p className='text-[#666666] mt-4'>
                        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                    </p>
                </div>
                <div>
                    <img src={trusted1} alt="Trusted" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Trusted