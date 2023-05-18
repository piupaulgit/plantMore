'use client'

import Footer from "../Footer";
import Header from "../Header";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import TopHeader from "../TopHeader";


const FrontEndUserLayout = ({
    children, 
  }: {
    children: React.ReactNode;
  }) => {

    return (
        <>
            <LoginModal/>
            <RegisterModal/>
            <TopHeader></TopHeader>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
  }

  export default FrontEndUserLayout;