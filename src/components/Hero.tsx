import Typewriter from "typewriter-effect";
import { events } from "../utils";
import EventCard from "./EventCard";
import Mr_Heddy from "../assets/Mr_heddy.jpg";
import testimony from "../data";
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Hero = () => {
    const [contactMail, setContactMail] = useState({
        name: "",
        sender_email: "",
        message: "",
    });
    const [flashMessage, setFlashMessage] = useState({
        type: false,
    });

    const [loadState, setLoadState] = useState(false);

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

    //function to handle change for the react form
    const handleInputChanges = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setContactMail((prev) => {
            return { ...prev, [name]: value };
        });
    };

    //send email
    const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoadState(true);
        try {
            const response = await fetch(
                "https://calm-teal-cougar-vest.cyclic.app/heddy-contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contactMail),
                }
            );
            const data = await response.json();
            setFlashMessage(data);
            if (response.status === 200 && data.message) {
                setContactMail({
                    name: "",
                    sender_email: "",
                    message: "",
                });
                setTimeout(() => {
                    setFlashMessage({
                        type: false,
                    });
                }, 4000);
            } else {
                alert(
                    "Error, We are unable to send your message. Please try again later"
                );
                setTimeout(() => {
                    setFlashMessage({
                        type: false,
                    });
                }, 4000);
            }
            setLoadState(false);
        } catch (err) {
            setLoadState(false);
            console.log(err);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div
                id="hero"
                className="hero__background w-full lg:h-[80vh] h-[70vh] flex flex-col justify-end"
            >
                <div className="default__bg px-8 py-2 mb-16 lg:ml-8 mx-0 lg:w-6/12 w-11/12 pb-3">
                    <p className="alex__brush text-3xl default__text">
                        Heddy Decorations!
                    </p>
                    <h1 className="font-bold text-3xl my-4 uppercase lg:min-h-20 min-h-28">
                        <Typewriter
                            options={{
                                strings: [
                                    "We can be your personal dream maker,",
                                    "You can make your event memorable with us,",
                                    "We are just a call away.",
                                ],
                                autoStart: true,
                                delay: 50,
                                cursor: "_",
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="text-sm">
                        We believe that it is all about the BIG DREAMS and the
                        small details!
                    </p>
                </div>
            </div>
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

            <div id="about" className="flex flex-col w-full p-8 border-b">
                <h1 className="text-4xl font-bold uppercase">
                    About Heddy Decorations
                </h1>
                <div className="flex flex-col w-full py-2">
                    <p className="lg:text-left text-justify text-sm">
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
                        <li className="lg:text-left text-justify">
                            <span className="font-bold">
                                Wedding decorations:
                            </span>
                            From ceremony backdrops and aisle runners to
                            centerpieces and cake tables, we can create a
                            wedding décor that reflects your unique style and
                            personality.
                        </li>
                        <li className="lg:text-left text-justify my-2">
                            <span className="font-bold">
                                Birthday decorations:
                            </span>
                            Whether you're planning a kid's birthday party or an
                            adult bash, we can create a fun and festive
                            atmosphere that your guests will love.
                        </li>
                        <li className="lg:text-left text-justify">
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
                        <li className="lg:text-left text-justify">
                            <span className="font-bold">Passion:</span> We are
                            passionate about event decoration, and it shows in
                            our work. We take pride in every event we do, and we
                            are always looking for new and creative ways to make
                            our clients' visions come to life.
                        </li>
                        <li className="lg:text-left text-justify my-2">
                            <span className="font-bold">Creativity:</span> We
                            have a team of talented and experienced designers
                            who can create anything you can imagine. We are not
                            afraid to think outside the box and come up with
                            unique and innovative designs.
                        </li>
                        <li className="lg:text-left text-justify">
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
                                <p className="text-sm">
                                    We create value and make a difference in
                                    every industry through inspiration and good
                                    customer satisfaction
                                </p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl default__text font-bold my-2 ">
                                    Our Vision:
                                </h1>
                                <p className="text-sm">
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

                    <div
                        id="contact"
                        className="w-full flex flex-col items-center justify-center dark__bg rounded-lg light__text py-8"
                    >
                        <div className="">
                            <h1 className="lg:text-3xl text-2xl font-bold uppercase">
                                Make your bookings!
                            </h1>
                            <div>
                                <div>
                                    <form onSubmit={sendMessage} method="post">
                                        <div className="flex flex-col gap-2 my-3">
                                            <label
                                                htmlFor="name"
                                                className="font-semibold"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={contactMail.name}
                                                onChange={(event) =>
                                                    handleInputChanges(event)
                                                }
                                                required
                                                className="default__text focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 my-3">
                                            <label
                                                htmlFor="sender_email"
                                                className="font-semibold"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="sender_email"
                                                name="sender_email"
                                                value={contactMail.sender_email}
                                                onChange={(event) =>
                                                    handleInputChanges(event)
                                                }
                                                required
                                                className=" default__text focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 my-3">
                                            <label
                                                htmlFor="message"
                                                className="font-semibold"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={contactMail.message}
                                                onChange={(event) =>
                                                    handleInputChanges(event)
                                                }
                                                required
                                                className="default__text focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8 h-48"
                                                placeholder="How can i help you?"
                                                style={{ resize: "none" }}
                                            ></textarea>
                                        </div>
                                        <button className="blogBtn lg:w-5/12 w-full  flex items-center justify-center p-2">
                                            {loadState ? (
                                                <div className="loadState"></div>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                        {flashMessage && (
                                            <div
                                                className={`text-center my-2 p-2 rounded flashMessage_${flashMessage.type}`}
                                            >
                                                {flashMessage.type === true
                                                    ? "Message sent"
                                                    : null}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
