import { Link } from "react-router-dom";
import Logo from "../assets/Eddydecorations_logo-removebg-preview.png";
import SocialLinks from "./SocialLinks";

interface ChildProps {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<ChildProps> = ({ setMenu }) => {
    return (
        <header className="flex flex-col items-center py-8 w-full">
            <nav className="flex flex-col items-center justify-center lg:w-8/12 w-full">
                <img
                    src={Logo}
                    alt="logo"
                    width={150}
                    className="logo drop-shadow-lg"
                />
                <ul className="w-full flex flex-col items-center justify-center default__text">
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to="/"
                            onClick={() => setMenu((prev) => !prev)}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to="/about"
                            onClick={() => setMenu((prev) => !prev)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-8 hover:font-semibold w-full py-4 inline-block cursor-pointer hover:translate-x-4"
                            to="/contact"
                            onClick={() => setMenu((prev) => !prev)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="social__links"></div>

                <div className="text-xs default__text text-center mt-8">
                    <div className="my-4">
                        <SocialLinks />
                    </div>

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
