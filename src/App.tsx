import "./App.css";
import { MenuIcon } from "./components/MenuIcon";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Services from "./components/Services";

function App() {
    type myState = boolean;
    const [menu, setMenu] = useState<myState>(false);
    return (
        <BrowserRouter>
            <MenuIcon menu={menu} setMenu={setMenu} />
            <div
                className={`1stleverl w-full flex z-20 justify-between items-start  `}
            >
                <div
                    className={`2ndlevel w-10/12 lg:hidden block mobile__menu p-4 shadow-2xl h-screen ${
                        menu === true ? "active" : null
                    } default__bg  z-50`}
                >
                    <Navigation setMenu={setMenu} />
                </div>

                <div className="lg:w-3/12 p-4 lg:block hidden shadow-2xl h-screen sticky left-0 top-0">
                    <Navigation setMenu={setMenu} />
                </div>
                <div className="lg:w-9/12">
                    <Routes>
                        <Route path="/" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
