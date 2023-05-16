import Footer from "../Footer";
import Header from "../Header";
import LoginModal from "../modals/LoginModal";
import TopHeader from "../TopHeader";

export default function FrontEndUserLayout({
    children, 
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
            <LoginModal/>
            <TopHeader></TopHeader>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
  }