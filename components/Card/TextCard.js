const TextCard = (props) => {
  return (
    <div className="relative">
      <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
        <div className="p-8">
          <h2 className="font-impact text-3xl">{props.title}</h2>
          <div className="text-sm mt-2">{props.description}</div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 h-full"></div>
    </div>
  );
};

export default TextCard;
