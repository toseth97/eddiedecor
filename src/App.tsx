import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="w-full default__bg min-h-screen">
            <BrowserRouter>
                <div className="w-full flex gap-5 z-20">
                    <div className="lg:w-2/12 p-4 lg:block hidden shadow-2xl h-screen ">
                        <Navigation />
                    </div>
                    <div
                        className={`w-10/12 lg:hidden block mobile__menu p-4 shadow-2xl h-screen ${
                            menu === true ? "active" : null
                        } default__bg`}
                    >
                        <Navigation />
                    </div>
                    <div onClick={() => setMenu((prev) => !prev)}>
                        {menu === false ? (
                            <i className="bx menu__btn lg:hidden block text-4xl bx-menu-alt-right border p-2 rounded-lg"></i>
                        ) : (
                            <i className="bx menu__btn lg:hidden block text-4xl bx-x border p-2 rounded-lg"></i>
                        )}
                    </div>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
