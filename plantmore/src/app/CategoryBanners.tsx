import { caterogyFive, caterogyFour, caterogyOne, caterogyThree, caterogyTwo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const CategoryBanners = () => {
  return (
    <section>
        <div className='container mx-auto flex gap-6'>
          <div className='left flex-1'>
            <div className=' relative mb-4'>
              <Image src={caterogyFive} alt="categoty"></Image>
              <button className=' absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white'>Seeds</button>
            </div>
            <div className='flex gap-3'>
              <div className=' relative'> 
                <Image src={caterogyThree} alt="categoty" height="300"></Image>
                <button className=' absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white'>Seeds</button>
              </div>
              <div className=' relative'> 
                <Image src={caterogyTwo} alt="categoty" height="300"></Image>
                <button className=' absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white'>Seeds</button>
              </div>
            </div>
          </div>
          <div className='right flex-1 gap-7 flex flex-col'>
              <div className=' relative'> 
                <Image src={caterogyFour} alt="categoty"></Image>
                <button className=' absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white'>Seeds</button>
              </div>
              <div className=' relative'> 
                <Image src={caterogyOne} alt="categoty" ></Image>
                <button className=' absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white'>Seeds</button>
              </div>
          </div>
        </div>
    </section>
  )
}

export default CategoryBanners