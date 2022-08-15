import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <Header />
        <NavBar />
        <About />
        <Experience />
        <Services />
        <Portafolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
