import HomeCardList from "../HomeCardList";
import Link from "next/link";

const Activity = ({ activity }) => {
  return (
    <div className="container mx-auto">
      {/* <div className="relative my-0">
        <h1 className="font-impact text-4xl md:text-6xl text-center text-gray-300">
          Activity
        </h1>
        <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-4xl md:text-6xl text-center ">
          Activity
        </h1>
      </div> */}
      <HomeCardList cards={activity} type="activity" />
      <div className="text-center mb-16 hover:underline">
        <Link href="/activity">See all</Link>
      </div>
    </div>
  );
};

export default Activity;
