import ImageCard from "./Card/ImageCard";

const Partnership = () => {
  return (
    <div>
      <div className="container mx-auto p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center items-start">
          <div className="relative my-16 w-full">
            <h1 className="font-impact text-center text-5xl md:text-7xl text-gray-300">
              Partnership
            </h1>
            <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 w-full font-impact text-center text-5xl md:text-7xl">
              Partnership
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <ImageCard image="/assets/partners/insted.png" />
        {/*<ImageCard image="/assets/partners/blank.webp" />
        <ImageCard image="/assets/partners/blank.webp" />
      </div>
      <div className="container mx-auto p-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
        <ImageCard image="/assets/partners/blank.webp" />
        <ImageCard image="/assets/partners/blank.webp" />
        <ImageCard image="/assets/partners/blank.webp" />*/}
      </div>
    </div>
  );
};

export default Partnership;
