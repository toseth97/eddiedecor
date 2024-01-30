import { Link } from "react-router-dom";

const SocialLinks = () => {
    return (
        <div className=" lg:text-2xl text-3xl">
            <Link to="https://www.instagram.com/heddydecor/" target="_blank">
                <i className="light__text rounded-lg p-1 hover:translate-y-1 mx-2 dark__bg  bx bxl-instagram"></i>
            </Link>
            <Link to="https://wa.me/+2347060467371" target="_blank">
                <i className="light__text rounded-lg p-1 hover:translate-y-1 mx-2 dark__bg  bx bxl-whatsapp"></i>
            </Link>
        </div>
    );
};

export default SocialLinks;
