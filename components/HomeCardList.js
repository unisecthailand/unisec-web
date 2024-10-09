import HomeCard from "./Card/HomeCard";
import Link from "next/link";

const HomeCardList = (props) => {
  const card = props.cards;
  const link = card.extlink ? card.extlink : ( card.slug ? `/${props.type}/` + card.slug : "/")

  if (card != null) {
    return (
      <div className="animaiton mb-8 lg:my-2 grid grid-cols-1 gap-8 md:gap-8 lg:gap-12 md:gap-y-0 p-8">
        <Link href={link}>
          <div data-aos="fade-up">
            <HomeCard
              title={card.title}
              image={card.cover}
              author={card.author ? ("by " + card.author) : ""}
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
