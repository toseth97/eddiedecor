import React, { useEffect, useState } from "react";
import Hero from "./Hero";

export const Contact = () => {
    useEffect(() => {
        //changing the page title.
        document.title = "Heddy Decorations - Contact";
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0);
    }, []);

    const [contactMail, setContactMail] = useState({
        name: "",
        sender_email: "",
        message: "",
    });

    const [flashMessage, setFlashMessage] = useState({
        type: false,
    });

    const [loadState, setLoadState] = useState(false);
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

    const contactsID = [
        { id: 1, type: "Email:", content: "heddydecorations@gmail.com" },
        {
            id: 2,
            type: "Address:",
            content:
                "No 1a, Titilayo cresent Olumbe Bassiar drive, Bodija, Ashi,Ibadan.",
        },
        { id: 3, type: "Phone:", content: "+2347060467371" },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <div
                id="contact"
                className="w-full flex flex-col items-center justify-center  py-8"
            >
                <div className="mb-8">
                    <div className="p-4 flex flex-col lg:flex-row gap-5">
                        {contactsID.map((item) => (
                            <div
                                className="default__text m-2 lg:w-4/12 w-full text-center"
                                key={item.id}
                            >
                                <h1 className="font-bold text-xl ">
                                    {item.type}
                                </h1>
                                <p className="opacity-80 text-sm">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dark__bg rounded-lg light__text p-16">
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
                                        placeholder="How can we help you?"
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
    );
};
