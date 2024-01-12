import React, { useEffect } from "react";
import { events } from "../utils";
import EventCard from "./EventCard";
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
            <div id="service" className="flex flex-col items-center w-full p-8">
                <div className="w-full">
                    <p className="default__text alex__brush text-2xl">
                        Heddy Decorations...
                    </p>
                    <h1 className=" uppercase tracking-wider font-bold text-4xl">
                        Our Services
                    </h1>
                </div>

                <div className="event__card flex gap-8 lg:flex-row flex-col my-8 lg:h-[80vh] h-auto">
                    {events.map((item) => (
                        <EventCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
