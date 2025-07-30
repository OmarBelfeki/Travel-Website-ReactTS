import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Explore from "./components/Explore/Explore.tsx";
import Journal from "./components/Journal/Journal.tsx";
import Footer from "./components/Footer/Footer.tsx";
import BGhero from "./assets/images/hero.jpg";

function App() {

    const bgImage = {
        backgroundImage: `url(${BGhero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
    };

    return (
        <div className="overflow-x-hidden bg-branDark text-white">
            <div style={bgImage}>
                <Navbar />
                <Hero />
            </div>
            <Explore />
            <Journal />
            <Footer />
        </div>
    )
}

export default App
