import HomeCard from "./Card/HomeCard";
import Link from "next/link";

const HomeCardList = (props) => {
  const card = props.cards;
  if (card != null) {
    return (
      <div className="animaiton grid-stair my-8 lg:my-16 grid grid-cols-1 gap-8 md:gap-8 lg:gap-16 lg:gap-y-0 p-8">
        <Link href={`/${props.type}/` + card.id}>
          <div data-aos="fade-up">
            <HomeCard
              title={card.title}
              image={card.cover}
              author={card.author ?? "UNISEC Thailand"}
              description={card.description}
            />
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="font-impact text-2xl h-96 flex flex-col justify-center items-center">
        Coming Soon
      </div>
    );
  }
};

export default HomeCardList;
