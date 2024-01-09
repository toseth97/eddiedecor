import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="w-full default-bg min-h-screen">
            <BrowserRouter>
                <div className="w-full flex gap-5">
                    <div className="w-3/12 p-4 ">
                        <Navigation />
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
