const ImageCard = ({ image, backgroundSize, website }) => {
  const cardContent = (
    <div className="relative">
      <div
        className="bg-white relative rounded-2xl border-2 border-white z-20"
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

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform transition-transform duration-300"
        title="Visit website"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default ImageCard;
