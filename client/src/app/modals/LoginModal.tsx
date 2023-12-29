"use client";

import React from "react";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { modalAction } from "../../redux/modalSlice";

const LoginModal = () => {
  const loginModalState = useSelector(
    (state: RootState) => state.ModalReducer.activeModalName
  );
  const dispatch = useDispatch();

  const bodyContent = (
    <>
      <h2 className=" font-bold text-2xl text-gray-700">
        Welcome to Plant More
      </h2>
      <h6 className=" font-light mb-8 text-sm">
        If you have an account plese login here
      </h6>
      <div className="flex flex-col gap-4">
        <Input id="email" label="Email Address" disabled={false} required />
        <Input
          id="passord"
          label="Password"
          disabled={false}
          required
          type="password"
        />
      </div>
    </>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <button className="bg-lime-600 text-white py-3 hover:bg-gray-900">
        Login
      </button>
      <div
        className="
      text-neutral-500 text-center mt-2 font-light"
      >
        <p>
          First time using Plant More?
          <button
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline hover:text-lime-600 font-bold pl-2
            "
            onClick={() =>
              dispatch(
                modalAction({ modalName: "registerModal", isOpen: true })
              )
            }
          >
            {" "}
            Create an account here
          </button>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={false}
      isOpen={loginModalState === "loginModal" ? true : false}
      title="User Login"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
