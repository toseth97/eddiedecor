import React from "react";
interface props {
    key: number;
    item: {
        title: string;
        description: string;
        text: string;
        img: string;
    };
}

const EventCard: React.FC<props> = ({ item: { title, text, img } }) => {
    return (
        <div className={`w-full rounded-lg relative overflow-hidden ${title}`}>
            <div className="w-full absolute z-10 text-white lg:bottom-[-100%] bottom-0 p-8 text__slide ">
                <p className="alex__brush text-4xl">{title}</p>
                <p className="text-sm">{text}</p>
            </div>
            <img
                src={img}
                alt={title}
                className="w-full object-cover lg:h-72 h-96"
                loading="lazy"
            />
        </div>
    );
};

export default EventCard;
