import React from 'react'
import Image from 'next/image'
import { bannerOne, bannerThree, bannerTwo } from "@/app/assets/images";

const Banner = () => {
  return (
    <section className='flex gap-8'>
        <div>
            <Image src={bannerOne} alt="banner one" />
        </div>
        <div className='flex flex-col gap-9'>
        <div>
            <Image src={bannerTwo} alt="banner two" />
        </div>
        <div>
            <Image src={bannerThree} alt="banner three" />
        </div>
        </div>
    </section>
  )
}

export default Banner