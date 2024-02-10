const Unisec = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
      <div className="flex flex-col justify-center">
        <div
          className="relative my-8 lg:my-16"
          data-aos="flip-down"
          data-aos-duration="500"
        >
          <h1 className="font-impact text-8xl lg:text-9xl xl:text-11xl text-gray-300 text-center lg:text-left">
            What is UNISEC
          </h1>
          <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact w-full text-8xl lg:text-9xl xl:text-11xl text-center lg:text-left">
            What is UNISEC
          </h1>
        </div>
      </div>
      <div>
        <div className="relative mb-16 xl:m-32 xl:mr-0">
          <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
            <div className="p-10 text-sm xl:text-base" data-aos="fade">
              UNISEC-Global is an international nonprofit body, consisting of
              local-chapters across the world. Since its establishment in
              November 2013 in Japan, UNISEC-Global has provided a forum every
              year to promote practical space development activities, mainly at
              university level, such as designing, developing, manufacturing,
              launching and operating micro/nano/pico satellites and rockets,
              including their payloads. University students, young researchers,
              their tutors and other stakeholders around the world participate
              in the annual UNISEC-Global Meeting.
            </div>
          </div>
          <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Unisec;
