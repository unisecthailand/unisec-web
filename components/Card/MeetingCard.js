import { imageUrlFor } from "../../src/sanity/sanityClient";
import Image from "next/image";

const MeetingCard = (props) => {
  const img = props.image
    ? imageUrlFor(props.image).url()
    : "/assets/blank.webp";

  return (
    <div className="relative cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-500">
      <div className="bg-custom-primary relative rounded-2xl border-2 border-gray-600 z-10">
        <div className="relative h-full">
          <Image
            className="rounded-t-2xl"
            src={img}
            alt={props.title || "Untitled"}
            layout="responsive"
            width={400}
            height={300}
            objectFit="cover"
          />
          <div className="p-5">
            <h3 className="font-impact text-2xl tracking-wide">
              {props.title || "Untitled"}
            </h3>
            <div className="text-sm">by {props.author}</div>
            <div className="mt-4 font-helvethaica-med-cond text-lg">
              {props.description
                ? props.description.slice(0, 150) +
                  (props.description.length > 150 ? "..." : "")
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-gray-600 z-0 h-full"></div>
    </div>
  );
};

export default MeetingCard;
