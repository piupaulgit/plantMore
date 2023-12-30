import {
  dummyEight,
  dummyFive,
  dummyFour,
  dummyOne,
  dummySeven,
  dummySix,
  dummyThree,
  dummyTwo,
} from "@/assets/images";
import Banner from "./components/Banner";
import CategoryBanners from "./components/CategoryBanners";
import ProductCard from "./components/ProductCard";
import { Tab, Tabs } from "./components/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <Banner></Banner>
        <Tabs position="justify-center">
          <Tab title="All Plants">
            <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className=" border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white">
                Show All
              </button>
            </div>
          </Tab>
          <Tab title="New Arrivals">
            <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className=" border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white">
                Show All
              </button>
            </div>
          </Tab>
          <Tab title="Sale">
            <div className="flex flex-wrap gap-4">
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className=" border-solid border-[1px] border-gray-900 py-3 w-[200px] hover:bg-gray-900 hover:text-white">
                Show All
              </button>
            </div>
          </Tab>
        </Tabs>
        <CategoryBanners></CategoryBanners>

        <section className=" mt-36">
          <div className="container mx-auto">
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">
              Find your dream plants
            </h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center">
              Summer Collection
            </h2>
            <div className="flex flex-wrap gap-4 mt-20">
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
              </div>
              <div className="w-[24%] mb-5">
                <ProductCard
                  title="Aliquet auctor sem"
                  price="200"
                ></ProductCard>
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
            <h6 className=" text-lg font-light text-lime-600 text-center mb-2">
              Be responsible
            </h6>
            <h2 className=" text-3xl font-bold text-gray-600 text-center mb-4">
              Lecture on environment
            </h2>
            <p className="w-[80%] text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, velit nulla quisquam doloremque, quos rerum
              voluptatem maiores nemo, quam ullam in animi optio quidem nobis.
              Ducimus fugiat illum voluptatem laboriosam!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
