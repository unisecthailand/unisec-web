const ImageCard = ({ image, backgroundSize }) => {
  return (
    <div className="relative">
      <div
        className="bg-custom-primary relative rounded-2xl border-2 border-white z-20"
        style={{
          paddingTop: "100%",
          backgroundImage: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10"
        style={{ paddingTop: "100%" }}
      ></div>
    </div>
  );
};

export default ImageCard;
