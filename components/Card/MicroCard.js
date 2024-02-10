const MicroCard = (props) => {
  return (
    <div className="relative cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-500">
      <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
        <div className="relative pb-10">
          <div
            className="relative h-44 rounded-t-2xl"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${props.image}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 py-4 px-8">
              <h2 className="font-impact text-2xl shadow-lg">{props.title}</h2>
              <div className="text-sm shadow-lg">by {props.author}</div>
            </div>
          </div>
          <div className="px-8 py-4 font-helvethaica-med-cond text-2xl">
            {props.description.slice(0, 150) +
              (props.description.length > 150 ? "..." : "")}
          </div>
        </div>
        <div className="absolute bottom-0 w-full px-8 py-6 flex flex-row justify-end items-center">
          <div className="text-sm">READ</div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 h-full"></div>
    </div>
  );
};

export default MicroCard;
