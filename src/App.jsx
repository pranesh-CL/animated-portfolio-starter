import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Test from "./test";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero></Hero>
    </section>
    <section id="Services"><Parallax type="services"></Parallax></section>
    <section>
      <Services/>
    </section>
    <section id="Portfolio"><Parallax type="portfolio"></Parallax></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">contact</section>
    {/*<Test></Test>*/}
  </div>;
};

export default App;
