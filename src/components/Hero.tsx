import Typewriter from "typewriter-effect";
import { events } from "../utils";
import EventCard from "./EventCard";
import Mr_Heddy from "../assets/Mr_heddy.jpg";

const Hero = () => {
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
                    <div className="my-8 w-full flex lg:flex-row flex-col gap-8 items-center justify-center">
                        <div className="flex  flex-col items-center justify-center">
                            <div className="relative lg:w-80 lg:h-80 w-60 h-60 overflow-hidden rounded-full">
                                <img
                                    src={Mr_Heddy}
                                    alt="mr heddy"
                                    className="absolute"
                                />
                            </div>
                            <h1 className="font-bold default__text">
                                Heddy Decorations
                            </h1>
                            <p className="text-xs italic">
                                Founder/CEO Heddy Decorations
                            </p>
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <div>
                                <h1 className="text-xl default__text font-bold my-2 text-center lg:text-left">
                                    Our Mission:
                                </h1>
                                <p className="text-sm">
                                    We create value and make a difference in
                                    every industry through inspiration and good
                                    customer satisfaction
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl default__text font-bold my-2 text-center lg:text-left">
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
                </div>
            </div>
        </div>
    );
};

export default Hero;
