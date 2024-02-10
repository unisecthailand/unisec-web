import { useRef, useEffect } from "react";
import LargeCard from "../../components/Card/LargeCard";
import Carousel from "react-elastic-carousel";

const Project = ({ projects }) => {
  const carousel = useRef(null);
  const projectsData = projects ?? [];
  const slideshow = projectsData.map((project) => ({
    title: project.title,
    image: project.cover ?? "/assets/rocket.webp",
    author: project.author ?? "UNISEC Thailand",
    description: project.description,
  }));

  const handleChange = (event) => {
    if (event.index == slideshow.length - 1) {
      setTimeout(() => {
        carousel.current.goTo(0);
      }, 5000);
    }
  };

  const handleArrow = (action) => {
    if (action == "Next") {
      carousel.current.slideNext();

      if (carousel.current.state.activeIndex == slideshow.length - 1) {
        carousel.current.goTo(0);
      }
    } else {
      carousel.current.slidePrev();
      if (carousel.current.state.activeIndex == 0) {
        carousel.current.goTo(2);
      }
    }
  };

  return (
    <div className="container mx-auto block lg:grid grid-cols-2 gap-8 lg:p-16">
      <div className="flex flex-col justify-center items-start">
        <div className="relative my-16 lg:m-0 mx-auto lg:mx-0">
          <h1 className="font-impact text-6xl md:text-8xl lg:text-9xl text-gray-300">
            Project
          </h1>
          <h1 className="absolute top-1 left-0 font-impact text-6xl md:text-8xl lg:text-9xl">
            Project
          </h1>
        </div>
      </div>
      <div className="relative my-8 lg:my-0">
        <Carousel
          ref={carousel}
          itemsToShow={1}
          showArrows={false}
          autoPlaySpeed={5000}
          pagination={true}
          itemPadding={[0, 30, 70, 0]}
          enableAutoPlay={true}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="flex flex-row justify-center">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <div
                      className={`h-2 w-2 border-2 border-white mx-1 ${
                        isActivePage ? "bg-white" : ""
                      }`}
                      key={page}
                    ></div>
                  );
                })}
              </div>
            );
          }}
          onChange={handleChange}
        >
          {slideshow.map((item) => (
            <LargeCard
              key={item.title}
              title={item.title}
              image={item.image}
              author={item.author}
              description={item.description}
            />
          ))}
        </Carousel>
        <div className="absolute w-full bottom-0 flex flex-row justify-between items-center">
          <div className="cursor-pointer" onClick={() => handleArrow("Prev")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="122"
              height="20"
              fill="none"
              viewBox="0 0 122 35"
            >
              <path
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M122 17.49H2M18.49 33.98L2 17.49 18.49 1"
              ></path>
            </svg>
          </div>
          <div className="cursor-pointer" onClick={() => handleArrow("Next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="122"
              height="20"
              fill="none"
              viewBox="0 0 122 35"
            >
              <path
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M0 17.49h120M103.51 33.98L120 17.49 103.51 1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
