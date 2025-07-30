import HomeCardList from "../HomeCardList";
import Link from "next/link";

const Activity = ({ activity }) => {
  return (
    <div className="container mx-auto">
      <HomeCardList cards={activity} type="activity" />
      <div className="text-center mb-16 hover:underline">
        <Link href="/activity">See all</Link>
      </div>
    </div>
  );
};

export default Activity;
