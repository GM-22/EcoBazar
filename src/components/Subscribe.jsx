import React from 'react'
import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Printerest from './icons/Printerest'
import Instragram from './icons/Instragram'

const Subscribe = () => {
  return (
    <section className="w-full  bg-[#F2F2F2] py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6">

        {/* Left Side */}
        <div>
          <h2 className="text-[28px] font-semibold text-[#1A1A1A]">
            Subscribe our Newsletter
          </h2>

          <p className="mt-2 max-w-md text-[15px] leading-6 text-[#999999]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Input */}
          <div className="flex h-[58px] w-[520px] overflow-hidden rounded-full border border-gray-200 bg-white">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 text-[15px] outline-none placeholder:text-[#999999]"
            />

            <button className="rounded-full bg-[#00B207] px-10 text-white transition hover:bg-[#2C742F]">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition hover:bg-[#2C742F]"
            >
              <Facebook size={15} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition hover:bg-[#2C742F]"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition hover:bg-[#2C742F]"
            >
              <Printerest size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition hover:bg-[#2C742F]"
            >
              <Instragram size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Subscribe