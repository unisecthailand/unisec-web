const LargeCard = (props) => {
  return (
    <div className="relative w-full">
      <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
        <div>
          <div
            className="relative rounded-t-2xl"
            style={{
              backgroundImage: `url('${props.image}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "75%",
            }}
          >
            <div className="absolute bottom-0 py-4 px-8">
              <h2 className="font-impact text-3xl md:text-5xl">
                {props.title}
              </h2>
              <div>by {props.author}</div>
            </div>
          </div>
          <div className="text-sm p-8">{props.description}</div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 h-full"></div>
      <div className="absolute w-full top-6 left-6 rounded-2xl bg-custom-primary border-2 border-white z-0 h-full"></div>
    </div>
  );
};

export default LargeCard;
