import SocialLinks from "./SocialLinks";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="w-full py-8 flex flex-col items-center justify-center border-t">
            <div className="lg:w-8/12 w-11/12 flex lg:flex-row flex-col gap-5 items-center justify-between">
                {" "}
                <p className="text-sm lg:text-left text-center default__text">
                    © {date} Heddy Decorations and Event planning, All right
                    reserved
                </p>
                <SocialLinks />
            </div>
        </div>
    );
};

export default Footer;
