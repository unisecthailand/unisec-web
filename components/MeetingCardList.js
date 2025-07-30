import MeetingCard from "./Card/MeetingCard";
import Link from "next/link";

const MeetingCardList = (props) => {
  const cards = props.cards ?? [];

  if (cards.length != 0) {
    return (
      <div className="lg:mt-2 lg:my-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 p-4 md:p-8">
        {cards.map((card, i) => (
          <Link href={`/activity/` + card.slug.current} key={i}>
            <div data-aos="fade-up">
              <MeetingCard
                title={card.title}
                image={card.cover4b3 ?? card.cover}
                author={card.author ?? "UNISEC Thailand"}
                description={card.description}
              />
            </div>
          </Link>
        ))}
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

export default MeetingCardList;
