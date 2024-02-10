import TextCard from "../Card/TextCard";

const Mission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/*<div
        style={{
          backgroundImage: `url('/assets/rocket.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "75%",
        }}
      ></div>*/}
      <div className="px-8 md:px-16 lg:px-8 xl:px-32 pb-16 lg:py-16 grid grid-cols-1 gap-8 md:gap-16">
        <div className="flex flex-col justify-center w-full" data-aos="fade-up">
          <TextCard
            title="Our Mission"
            description="Cultivate a supportive and motivating community for Thailand's space initiatives, with a primary focus on nurturing the potential of every Thai students."
          />
        </div>
        <div className="flex flex-col justify-center w-full" data-aos="fade-up">
          <TextCard
            title="Our Vision"
            description="Space technology is closer to us than we may think."
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
