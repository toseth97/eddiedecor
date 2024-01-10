import Typewriter from "typewriter-effect";

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
                        Events and Weddings
                    </p>
                    <h1 className=" uppercase tracking-wider font-bold text-4xl">
                        Our Services
                    </h1>
                </div>

                <div className="event__card"></div>
            </div>
        </div>
    );
};

export default Hero;
