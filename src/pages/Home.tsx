
import PatientForm from "../components/PatientForm";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceList />
      <PatientForm />
    </>
  );
};

export default Home;
