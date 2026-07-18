import { useState, useEffect } from "react";
import MeetingCard from "./Card/MeetingCard";
import Link from "next/link";
import sortByTimestamp from "../utils/sortByTimestamp";

const getResponsiveInitialCount = () => {
  if (typeof window === "undefined") {
    return 5;
  }
  if (window.innerWidth >= 1280) {
    return 5; // xl:grid-cols-5
  } else if (window.innerWidth >= 1024) {
    return 4; // lg:grid-cols-4
  } else if (window.innerWidth >= 768) {
    return 3; // md:grid-cols-3
  } else {
    return 2; // grid-cols-2
  }
};

const MeetingCardList = (props) => {
  const allCards = props.cards ?? [];
  const sortedCards = sortByTimestamp(allCards);
  const [visibleCardsCount, setVisibleCardsCount] = useState(10);

  useEffect(() => {
    setVisibleCardsCount(getResponsiveInitialCount() * 2);
    const handleResize = () => {
      setVisibleCardsCount(getResponsiveInitialCount() * 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow = sortedCards.slice(0, visibleCardsCount);
  const hasMore = sortedCards.length > visibleCardsCount;

  const handleShowMore = () => {
    setVisibleCardsCount(visibleCardsCount + getResponsiveInitialCount() * 2);
  };

  if (sortedCards.length === 0) {
    return (
      <div className="font-impact text-2xl h-96 flex flex-col justify-center items-center">
        Coming Soon
      </div>
    );
  }

  return (
    <div className="lg:mt-2 lg:my-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 p-4 md:p-8">
        {cardsToShow.map((card, i) => (
          <Link href={`/activity/` + card.slug.current} key={i}>
            <div data-aos="fade-up">
              <MeetingCard
                title={card.title}
                image={card.cover}
                author={card.author ?? "UNISEC Thailand"}
                description={card.description}
              />
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="mb-8 mt-4 text-center hover:underline cursor-pointer">
          <p onClick={handleShowMore}>Show More</p>
        </div>
      )}
    </div>
  );
};

export default MeetingCardList;
