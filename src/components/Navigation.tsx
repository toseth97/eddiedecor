import Logo from "../assets/Eddydecorations_logo.jpg";

const Navigation = () => {
    return (
        <header className="flex flex-col items-center justify-center">
            <nav className="">
                <img src={Logo} alt="logo" width={150} />
            </nav>
        </header>
    );
};

export default Navigation;
