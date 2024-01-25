import { useEffect } from "react";
import { events } from "../utils";
import EventCard from "./EventCard";
import Gallery from "./Gallery";
import Hero from "./Hero";

const Services = () => {
    useEffect(() => {
        //changing the page title.
        document.title = "Heddy Decorations - Home";
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <div
                id="service"
                className="flex flex-col items-center w-full p-8 py-2 overflow"
            >
                <div className="w-full">
                    <h1 className=" uppercase tracking-wider font-bold text-4xl">
                        Our Services
                    </h1>
                </div>

                <div className="event__card flex gap-8 lg:flex-row flex-col  mt-8 lg:h-[80vh] h-auto">
                    {events.map((item) => (
                        <EventCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="event__card flex flex-col">
                    <h1 className="text-3xl mt-4 font-bold mb-0">Gallery</h1>
                    <em className="my-2 mb-4">
                        Here at Heddy Decorations & Event planning services, we
                        make your dream event come to life .
                    </em>
                    <div className="relative">
                        <p className="absolute flex justify-center items-center right-5 bottom-5 py-1 px-4 text-sm dark__bg text-white rounded-xl z-10">
                            <i className="bx bx-left-arrow-alt"></i>
                            <span> Swipe</span>
                            <i className="bx bx-right-arrow-alt"></i>
                        </p>
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
