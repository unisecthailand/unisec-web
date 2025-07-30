import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Unisec from "../components/About/Unisec";
import Mission from "../components/About/Mission";
import Partnership from "../components/Partnership";

import Divider from "../components/Divider";
import Footer from "../components/Footer";

const About = (props) => {
  return (
    <div className="relative min-h-screen bg-gradient">
      <Header />

      <main className="py-20 lg:pt-40 xl:py-20">
        <Navbar />
        <Unisec />
        <Divider />
        <Mission />
        <Divider />
        <a className="anchor" id="partnership"></a>
        <Partnership />
      </main>

      <footer className="absolute top-full w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
