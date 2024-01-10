import { Link } from "react-router-dom";
import Logo from "../assets/Eddydecorations_logo-removebg-preview.png";

const Navigation = () => {
    return (
        <header className="flex flex-col items-center py-8 w-full">
            <nav className="flex flex-col items-center justify-center w-full">
                <img src={Logo} alt="logo" width={150} className="logo" />
                <ul className="w-full flex flex-col items-center justify-center default__text">
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to=""
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to=""
                        >
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to=""
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to=""
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="social__links"></div>

                <div className="text-xs default__text text-center mt-8">
                    <p className="text-xs default__text italic">
                        No 1a, Titilayo cresent Olumbe Bassiar drive, Bodija,
                        Ashi,Ibadan.
                    </p>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
