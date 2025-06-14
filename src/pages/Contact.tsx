import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileMenuNav from "../components/MobileMenuNav";

const Contact = () => {
  return (
    <>
      <header className="lg:hidden">
        <MobileMenuNav />
      </header>

      <Header />
      <Footer />
    </>
  );
};

export default Contact;
