const NanoCard = (props) => {
  return (
    <div className="relative cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-500">
      <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-10">
        <div className="relative h-full">
          <div className="grid grid-cols-5 pb-12">
            <div
              className="col-span-2 rounded-tl-2xl"
              style={{
                backgroundImage: `url('${props.image}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-span-3 p-4 flex flex-col justify-center items-start">
              <h3 className="font-impact text-lg">{props.title}</h3>
              <div className="text-xs">by {props.author}</div>
              <div className="mt-2 font-helvethaica-med-cond text-base">
                {props.description.slice(0, 70) +
                  (props.description.length > 70 ? "..." : "")}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-8 py-4 flex flex-row justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
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
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-0 h-full"></div>
    </div>
  );
};

export default NanoCard;
