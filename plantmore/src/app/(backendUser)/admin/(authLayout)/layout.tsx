import { logo } from "@/assets/images";
import Image from "next/image";

export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className=" min-w-full min-h-screen flex justify-center items-center mt-[-70px]">
        <div className="flex justify-center items-center flex-col">
            <Image src={logo} alt="plant more logo" width="120"  className="mb-4"/>
            {children}
        </div>
      </section>
    );
  }