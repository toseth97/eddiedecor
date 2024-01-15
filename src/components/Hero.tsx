import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div
            id="home"
            className="hero__background w-full lg:h-[80vh] h-[70vh] flex flex-col justify-end"
        >
            <div className="default__bg px-8 py-2 mb-16 lg:ml-8 mx-0 lg:w-6/12 w-11/12 pb-3">
                <p className="alex__brush text-3xl default__text">
                    Heddy Decorations <br /> & Event planning!
                </p>
                <h1 className="font-bold text-3xl my-4 uppercase lg:min-h-24 min-h-36">
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
                    We believe that it is all about the BIG DREAMS and the small
                    details!
                </p>
            </div>
        </div>
    );
};

export default Hero;
