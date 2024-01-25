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
        <div
            className={`w-full rounded-lg relative overflow-hidden h-[80%] ${title}`}
        >
            <div className="w-full absolute z-10 text-white lg:bottom-[-100%] bottom-0 p-8 text__slide ">
                <p className="alex__brush text-4xl">{title}</p>
                <p className="text-sm">{text}</p>
            </div>
            <img src={img} alt={title} className="w-full" loading="lazy" />
        </div>
    );
};

export default EventCard;
