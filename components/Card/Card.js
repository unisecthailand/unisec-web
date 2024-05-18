const Card = (props) => {
  return (
    <div className="relative h-full cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-500">
      <div className="bg-custom-primary relative h-full rounded-2xl border-2 border-gray-600 z-10">
        <div className="relative h-full">
          <div
            className="rounded-t-2xl"
            style={{
              backgroundImage: `url('${
                props.image ||
                "https://firebasestorage.googleapis.com/v0/b/unisec-web.appspot.com/o/rocket.webp?alt=media&token=b814b524-1359-4c81-ae73-272a8c7147f2"
              }')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "56.25%",
            }}
          ></div>
          <div className="px-8 py-4 pb-20">
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
          <div className="absolute bottom-0 w-full px-8 py-6 flex flex-row justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                fill="none"
                viewBox="0 0 60 30"
              >
                <path
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M58.53 14.75H0M44.69.9l13.84 13.85-13.84 13.84"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-gray-600 z-0 h-full"></div>
    </div>
  );
};

export default Card;
