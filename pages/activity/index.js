import fs from "fs";
import matter from "gray-matter";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardList from "../../components/CardList";
import MeetingCardList from "../../components/MeetingCardList";

import { GetStaticProps, GetStaticPropsContext } from "next";

import { useRouter } from "next/router";

import sortByTimestamp from "../../utils/sortByTimestamp";
import { getAllArticles } from "../../utils/articles";

const Activity = (props) => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient">
      <Header />
      <main className="py-20">
        <Navbar />
        <div className="gap-8 xl:px-4">
          <div className="relative my-2">
            <h1 className="font-impact text-6xl lg:text-8xl text-center text-gray-300">
              Activity
            </h1>
            <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-6xl lg:text-8xl text-center ">
              Activity
            </h1>
          </div>

          <div className="flex flex-col lg:grid mt-8">
            <a className="anchor" id="online-meeting"></a>
            <h1 className={`font-impact text-4xl text-white flex flex-col justify-end items-center cursor-pointer hover:text-white`}>
              Online Meeting
            </h1>
            <MeetingCardList
              cards={props.meetings}
              type="meetings"
            />

            <a className="anchor" id="our-activity"></a>
            <h1 className={`font-impact text-4xl text-white flex flex-col justify-end items-center cursor-pointer hover:text-white`}>
              Our Activity
            </h1>
            <CardList
              cards={props.activities}
              type="activity"
            />

            <a className="anchor" id="upcomming-activity"></a>
            <h1 className={`font-impact text-4xl text-white flex flex-col justify-end items-center cursor-pointer hover:text-white`}>
              Upcomming Activity
            </h1>
              <CardList
              cards={props.upcommings}
              type="activity"
            />
            <h1 className={`font-impact text-4xl text-white flex flex-col justify-end items-center cursor-pointer hover:text-white`}>
              Research Projects
            </h1>
          </div>
            <CardList
              cards={props.none}
              type="activity"
            />
          </div>
      </main>

      <footer className="absolute top-full w-full">
        <Footer/>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  // Get All Markdown files
  const files = await getAllArticles();
  const articles = files.map((file) => {
    const data = fs.readFileSync(`posts/${file}`).toString();
    return { ...matter(data).data, id: file.split(".")[0] };
  });

  const upcommings = [];
  const activities = [];
  const meetings = [];
  const none = [];

  articles.forEach((article) => {
    switch (article.type) {
      case "UPCOMMING":
        upcommings.push(article);
        break;
      case "ACTIVITY":
        activities.push(article);
        break;
      case "MEETING":
        meetings.push(article);
        break;
      default:
        break;
    }
    return;
  });

  return {
    props: {
      upcommings,
      activities,
      meetings,
      none
    },
  };
}

export default Activity;
