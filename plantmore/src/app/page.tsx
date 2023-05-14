import {
  dummyEight,
  dummyFive,
  dummyFour,
  dummyOne,
  dummySeven,
  dummySix,
  dummyThree,
  dummyTwo,
  productSample,
} from "@/assets/images";
import Banner from "@/components/Banner";
import CategoryBanners from "@/components/CategoryBanners";
import OtherPageBanner from "@/components/OtherPageBanner";
import ProductCard from "@/components/ProductCard";
import { Tab, Tabs } from "@/components/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="px-5">
        {/* single page */}
        <OtherPageBanner></OtherPageBanner>
        <section>
          <div className="container mx-auto ">
            <div className="flex gap-16">
              <div className="flex-1">
                <Image
                  src={productSample}
                  className="w-full"
                  alt="product image"
                ></Image>
              </div>
              <div className="flex-1">
                <h2 className=" text-4xl font-semibold text-gray-700 mb-4">
                  Aliquam lobortis
                </h2>
                <h5 className=" text-3xl font-light text-gray-700 mb-10">
                  $75.00
                </h5>
                <p className=" text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  posuere metus vitae arcu imperdiet, id aliquet ante
                  scelerisque. Sed sit amet sem.
                </p>
                <div className="flex gap-3 mt-10">
                  <button className="bg-lime-600 text-white px-10 py-4 flex gap-3 items-center hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    Add to Cart
                  </button>
                  <button className="py-4 px-5 border-lime-600 border-solid border-[1px] hover:bg-lime-600 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                  </button>
                  <button className="py-4 px-5 border-lime-600 border-solid border-[1px] hover:bg-lime-600 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* single page */}

        {/* home */}
        {/* <Banner></Banner> */}
        {/* <Tabs>
          <Tab title='All Plants'>
            <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
            </div>
          </Tab>
          <Tab title='New Arrivals'>
            
          <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
            </div>
          </Tab>
          <Tab title='Sale'>
            
          <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
            </div>
          </Tab>
        </Tabs>
        <CategoryBanners></CategoryBanners>

        <section className=" mt-36">
          <div className="container mx-auto">
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">Find your dream plants</h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center">Summer Collection</h2>
            <div className="flex flex-wrap gap-4 mt-20">
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className=" border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white">
                Show All
              </button>
            </div>
          </div>
        </section>

        <div className="flex mt-20">
          <Image src={dummyOne} alt="image"></Image>
          <Image src={dummyTwo} alt="image"></Image>
          <Image src={dummyThree} alt="image"></Image>
          <Image src={dummyFour} alt="image"></Image>
          <Image src={dummyFive} alt="image"></Image>
          <Image src={dummySix} alt="image"></Image>
          <Image src={dummySeven} alt="image"></Image>
          <Image src={dummyEight} alt="image"></Image>
        </div>
        <section className="py-24">
          <div className="container mx-auto">
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">Be responsible</h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center mb-4">Lecture on environment</h2>
            <p className="w-[80%] text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit nulla quisquam doloremque, quos rerum voluptatem maiores nemo, quam ullam in animi optio quidem nobis. Ducimus fugiat illum voluptatem laboriosam!
            </p>
          </div>
        </section> */}
        {/* home */}
      </div>
    </main>
  );
}
