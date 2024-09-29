import { urlFor } from "../../src/sanity/sanityClient";

const Card = (props) => {
  return (
    <div className="relative h-full cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-500">
      <div className="bg-custom-primary relative h-full rounded-2xl border-2 border-gray-600 z-10">
        <div className="relative h-full">
          <div
            className="rounded-t-2xl"
            style={{
              backgroundImage: `url('${urlFor(props.image).url()}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "56.25%",
            }}
          ></div>
          <div className="p-5">
            <h3 className="font-impact text-3xl">
              {props.title || "Untitled"}
            </h3>
            <div className="text-sm">by {props.author}</div>
            <div className="mt-4 font-helvethaica-med-cond">
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

export default Card;
