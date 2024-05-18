import Card from "../components/Card/Card";
import Link from "next/link";
import sortByTimestamp from "../utils/sortByTimestamp";

const CardList = (props) => {
  const cards = sortByTimestamp(props.cards) ?? [];

  if (cards.length != 0) {
    return (
      <div className="mb-8 lg:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-8 lg:gap-12 p-8">
        {cards.map((card, i) => (
          <Link href={`/${props.type}/` + card.id} key={i}>
            <div data-aos="fade-up">
              <Card
                title={card.title}
                image={card.cover}
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

export default CardList;
