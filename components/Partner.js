import ImageCard from "./Card/ImageCard";

const Partner = () => {
  return (
    <div className="pb-20">
      <div className="container mx-auto p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center items-start">
          <div className="relative my-16 w-full">
            <h1 className="font-impact text-center text-5xl md:text-7xl text-gray-300">
              Our Partners
            </h1>
            <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 w-full font-impact text-center text-5xl md:text-7xl">
              Our Partners
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ImageCard image="/assets/partners/insted.png" />
        <ImageCard image="/assets/partners/astronergy.jpg" />
        <ImageCard image="/assets/partners/cuhar.png" />
        <ImageCard
          image="/assets/partners/star-lab.jpg"
          backgroundSize="contain"
        />
      </div>
    </div>
  );
};

export default Partner;
