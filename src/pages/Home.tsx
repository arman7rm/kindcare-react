import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileMenuNav from "../components/MobileMenuNav";
import ServiceList from "../components/ServiceList";

const Home = () => {
  return (
    <>
      <header className="lg:hidden">
        <MobileMenuNav />
      </header>

      <Header />
      <Hero />
      <ServiceList/>
      <Footer />
    </>
  );
};

export default Home;
