import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import MobileMenuNav from "../components/MobileMenuNav";

const Home = () => {
  return (
    <>
      <header className="lg:hidden">
        <MobileMenuNav />
      </header>

      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
