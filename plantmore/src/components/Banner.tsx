import React from 'react'
import Image from 'next/image'
import { bannerOne, bannerThree, bannerTwo } from "../assets/images";

const Banner = () => {
  return (
    <section className='flex gap-8'>
        <div className='w-[49%] relative'>
            <Image src={bannerOne} alt="banner one" />
            <div className='text-white text-center absolute top-[80px] left-[50%] translate-x-[-50%] w-full'>
              <h2 className=' font-extralight text-2xl mb-3'>FALL / SUMMER</h2>
              <h1 className=' font-bold text-6xl'>Terradium collection</h1>
            </div>
        </div>
        <div className='flex flex-col gap-10 w-[51%]'>
        <div className=' relative'>
            <Image src={bannerTwo} alt="banner two" />
            <div className=' absolute right-[50px] top-[50%] translate-y-[-50%]'>
            <h2 className='text-4xl font-black text-gray-700 mb-2'>
              Snake Plant<br/> Laurentii Small
            </h2>
            <h4 className='text-3xl font-light text-gray-700'>Rs. 200</h4>
            </div>
        </div>
        <div className=' relative'>
            <Image src={bannerThree} alt="banner three" />
            <div className=' absolute left-[20px] top-[50%] translate-y-[-50%]'>
            <h2 className='text-4xl font-black text-gray-700 mb-2'>Peperomia Ripple<br/> Ruby Large</h2>
            <h4 className='text-3xl font-light text-gray-700'>Rs. 100</h4>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner