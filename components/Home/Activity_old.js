import NanoCard from "../Card/NanoCard";
import Link from "next/link";

const Activity = ({ conferences, competitions, camps }) => {
  const campsData = camps ?? [];
  const competitionsData = competitions ?? [];
  const conferencesData = conferences ?? [];
  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 py-16">
      <div className="py-10">
        <div className="relative mb-10">
          <h1 className="font-impact text-5xl md:text-6xl text-center text-gray-300">
            Camp
          </h1>
          <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-5xl md:text-6xl text-center ">
            Camp
          </h1>
        </div>
        <div className="mx-8 lg:mx-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
          {campsData.length != 0 ? (
            campsData.map((item, i) => (
              <Link href={"/activity/" + item.id} key={i}>
                <div data-aos="fade">
                  <NanoCard
                    title={item.title}
                    id={item.id}
                    image={item.cover ?? "/assets/space.webp"}
                    author={item.author ?? "UNISEC Thailand"}
                    description={item.description}
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center">Coming Soon</div>
          )}
        </div>
      </div>
      <div className="border-white border-0 xl:border-l-2 xl:border-r-2 py-10">
        <div className="relative mb-10">
          <h1 className="font-impact text-5xl md:text-6xl text-center text-gray-300">
            Competition
          </h1>
          <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-5xl md:text-6xl text-center ">
            Competition
          </h1>
        </div>
        <div className="mx-8 lg:mx-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
          {competitionsData.length != 0 ? (
            competitionsData.map((item, i) => (
              <Link href={"/activity/" + item.id} key={i}>
                <div data-aos="fade">
                  <NanoCard
                    title={item.title}
                    id={item.id}
                    image={item.cover ?? "/assets/space.webp"}
                    author={item.author ?? "UNISEC Thailand"}
                    description={item.description}
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center">Coming Soon</div>
          )}
        </div>
      </div>
      <div className="py-10">
        <div className="relative mb-10">
          <h1 className="font-impact text-5xl md:text-6xl text-center text-gray-300">
            Conference
          </h1>
          <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-5xl md:text-6xl text-center ">
            Conference
          </h1>
        </div>
        <div className="mx-8 lg:mx-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
          {conferencesData.length != 0 ? (
            conferencesData.map((item, i) => (
              <Link href={"/activity/" + item.id} key={i}>
                <div data-aos="fade">
                  <NanoCard
                    title={item.title}
                    id={item.id}
                    image={item.cover ?? "/assets/space.webp"}
                    author={item.author ?? "UNISEC Thailand"}
                    description={item.description}
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center">Coming Soon</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
