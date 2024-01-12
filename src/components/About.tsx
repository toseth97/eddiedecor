import React, { useEffect, useState } from "react";
import Mr_Heddy from "../assets/Mr_heddy.jpg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import testimony from "../data";
import Hero from "./Hero";

const About = () => {
    useEffect(() => {
        //changing the page title.
        document.title = "Heddy Decorations - About";
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0);
    }, []);
    const people = testimony;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <div id="about" className="flex flex-col w-full p-8 border-b">
                <h1 className="text-4xl font-bold uppercase">
                    About Heddy Decorations
                </h1>
                <div className="flex flex-col w-full py-2">
                    <p className="lg:text-left text-justify text-sm opacity-80">
                        Heddy Decorations & Event planning service is a
                        Nigeria-based event decoration company specializing in
                        creating unforgettable weddings, birthdays, and special
                        events. We are passionate about helping our clients
                        celebrate their special occasions in style, and we take
                        pride in our attention to detail and commitment to
                        customer satisfaction.
                    </p>
                    <h1 className="text-xl font-bold my-4">
                        We offer a wide range of event decoration services,
                        including:
                    </h1>
                    <ul className="lg:text-left text-justify text-sm service__list px-4 lg:w-7/12 w-full">
                        <li className="lg:text-left text-justify opacity-80">
                            <span className="font-bold">
                                Wedding decorations:
                            </span>
                            From ceremony backdrops and aisle runners to
                            centerpieces and cake tables, we can create a
                            wedding décor that reflects your unique style and
                            personality.
                        </li>
                        <li className="lg:text-left text-justify my-2 opacity-80">
                            <span className="font-bold">
                                Birthday decorations:
                            </span>
                            Whether you're planning a kid's birthday party or an
                            adult bash, we can create a fun and festive
                            atmosphere that your guests will love.
                        </li>
                        <li className="lg:text-left text-justify opacity-80">
                            <span className="font-bold">
                                Special event decorations:
                            </span>
                            We also specialize in decorating for other special
                            occasions, such as baby showers, bridal showers,
                            graduations, and corporate events.
                        </li>
                    </ul>
                    <h1 className="text-xl font-bold my-4">
                        What Makes Us Different
                    </h1>
                    <ul className="lg:text-left text-justify text-sm list-decimal px-4 lg:w-7/12 w-full">
                        <li className="lg:text-left text-justify opacity-80">
                            <span className="font-bold">Passion:</span> We are
                            passionate about event decoration, and it shows in
                            our work. We take pride in every event we do, and we
                            are always looking for new and creative ways to make
                            our clients' visions come to life.
                        </li>
                        <li className="lg:text-left text-justify my-2 opacity-80">
                            <span className="font-bold">Creativity:</span> We
                            have a team of talented and experienced designers
                            who can create anything you can imagine. We are not
                            afraid to think outside the box and come up with
                            unique and innovative designs.
                        </li>
                        <li className="lg:text-left text-justify opacity-80">
                            <span className="font-bold">
                                Commitment to customer service:
                            </span>{" "}
                            We are committed to providing our clients with the
                            best possible customer service. We will work closely
                            with you to understand your vision for your event
                            and make sure that we exceed your expectations.
                        </li>
                    </ul>
                    <div className="my-8 w-full flex lg:flex-row flex-col gap-16 items-center justify-center">
                        <div className="flex  flex-col items-center justify-center">
                            <div className="relative lg:w-80 lg:h-80 w-60 h-60 overflow-hidden rounded-full">
                                <img
                                    src={Mr_Heddy}
                                    alt="mr heddy"
                                    className="absolute"
                                />
                            </div>
                            <h1 className="font-bold default__text text-xl mt-4">
                                Titus Adefiranye
                            </h1>
                            <p className="text-xs italic">
                                Founder/CEO Heddy Decorations
                            </p>
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl default__text font-bold my-2 text-center lg:text-left">
                                    Our Mission:
                                </h1>
                                <p className="text-sm opacity-80">
                                    We create value and make a difference in
                                    every industry through inspiration and good
                                    customer satisfaction
                                </p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl default__text font-bold my-2 ">
                                    Our Vision:
                                </h1>
                                <p className="text-sm opacity-80">
                                    To be a model and fast growing event
                                    industry in Africa. <br />
                                    We believe in customer service,
                                    communication and integrity
                                </p>
                            </div>
                        </div>
                    </div>
                    <section id="testimony" className="section my-8 w-full">
                        <div className="title">
                            <h1 className="lg:text-4xl text-3xl uppercase font-bold my-4">
                                Testimony
                            </h1>
                        </div>
                        <div className="section-center lg:w-7/12 w-full">
                            {people.map((person, personIndex) => {
                                const { id, image, name, quote } = person;

                                let position = "nextSlide";
                                if (personIndex === index) {
                                    position = "activeSlide";
                                }
                                if (
                                    personIndex === index - 1 ||
                                    (index === 0 &&
                                        personIndex === people.length - 1)
                                ) {
                                    position = "lastSlide";
                                }

                                return (
                                    <article
                                        className={`${position} flex flex-col items-center`}
                                        key={id}
                                    >
                                        <img
                                            src={image}
                                            alt={name}
                                            className="person-img"
                                        />
                                        <h4 className="default__text font-bold mb-4">
                                            {name}
                                        </h4>
                                        <p className="text-sm opacity-60 mt-8">
                                            {quote}
                                        </p>
                                        <FaQuoteRight className="icon" />
                                    </article>
                                );
                            })}
                            <button
                                className="prev"
                                onClick={() => setIndex(index - 1)}
                            >
                                <FiChevronLeft />
                            </button>
                            <button
                                className="next"
                                onClick={() => setIndex(index + 1)}
                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
