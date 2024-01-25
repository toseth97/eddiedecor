import { gallery } from "../utils";
const Gallery = () => {
    return (
        <div className="flex w-full gap-2 image-list overflow-x-scroll ">
            {gallery.map((picture) => {
                const { id, img } = picture;

                return (
                    <img
                        loading="lazy"
                        src={img}
                        alt={img}
                        key={id}
                        className="w-full h-full "
                    />
                );
            })}
        </div>
    );
};

export default Gallery;
