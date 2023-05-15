import OtherPageBanner from "@/components/OtherPageBanner";
import React from "react";

const Register = () => {
  return (
    <>
      <OtherPageBanner title="Register"></OtherPageBanner>
      <div className="container mx-auto pb-10">
        <h2 className=" text-3xl font-bold text-gray-600 text-center">Register</h2>
        <div className="mt-10 w-[40%] mx-auto">
            <div>
                <input placeholder="Email Address" className="px-4 py-3 border-[1px] border-solid border-gray-200 w-full mb-4" />
            </div>
            <div>
                <input placeholder="Username" className="px-4 py-3 border-[1px] border-solid border-gray-200 w-full mb-4"/>
            </div>
            <div>
                <input placeholder="Password" className="px-4 py-3 border-[1px] border-solid border-gray-200 w-full mb-4"/>
            </div>
            <div>
                <input placeholder="Confirm Password" className="px-4 py-3 border-[1px] border-solid border-gray-200 w-full mb-4"/>
            </div>
            <button className="w-full py-4 bg-lime-600 text-white hover:bg-gray-900">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Register;
