import { useRef, useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";

const Parallex = ({ image, children, darken, childrenClass }) => {
  const parallexImage = useRef(null);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    parallexImage.current.style.transform = `translate3d(0, ${
      scrollY * 0.5
    }px,0)`;
  }, [scrollY]);

  return (
    <div className="relative overflow-hidden" style={{ height: "80vh" }}>
      <div
        ref={parallexImage}
        className="h-full w-full object-cover object-bottom"
        style={{
          backgroundImage: `${
            darken
              ? "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), "
              : ""
          }url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${childrenClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallex;
