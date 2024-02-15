import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Activity from "../components/Home/Activity";
import Partnership from "../components/Partnership";

import Divider from "../components/Divider";
import Footer from "../components/Footer";

import fs from "fs";
import matter from "gray-matter";

import sortByTimestamp from "../utils/sortByTimestamp";
import { getAllArticles } from "../utils/articles";

import Link from "next/link";

import { useState, useEffect } from "react";

function Home(props) {
  const blogs = props.activities.concat(props.meetings)
  const latestBlogs = sortByTimestamp(blogs).slice(0,4);
  console.log(latestBlogs)
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(seconds => (seconds === 3 ? 0 : seconds + 1));
    }, 10000);

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    console.log("seconds", latestBlogs[index]);
  }, [index]);

  return (
    <div className="relative min-h-screen bg-gradient">
      <Header />
      <main className="pb-20">
        <Navbar />
        <br></br>
        <div className="pt-16 px-4 lg:px-16 md:px-8 lg:pb-16">
          <h2 className="text-5xl font-helvethaica-blk-cond mb-8">
            Welcome to Unisec Thailand
          </h2>
          <div className="grid gap-8 main-logo">
            <img src="/assets/logo-w.webp"></img>
          </div>
        </div>
        <Activity activity={latestBlogs[index]} />
        <Divider />
        <Partnership />
      </main>

      <footer className="absolute top-full w-full">
        <Footer
          blogs={sortByTimestamp(props.blogs)}
          projects={sortByTimestamp(props.projects)}
        />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  // Get All Markdown files
  const files = await getAllArticles();
  const articles = files.map((file) => {
    const data = fs.readFileSync(`posts/${file}`).toString();
    return { ...matter(data).data, id: file.split(".")[0] };
  });

  const blogs = [];
  const projects = [];
  const camps = [];
  const competitions = [];
  const conferences = [];
  const activities = [];
  const meetings = [];
  const none = [];

  articles.forEach((article) => {
    switch (article.type) {
      case "BLOG":
        blogs.push(article);
        break;
      case "PROJECT":
        projects.push(article);
        break;
      case "CAMP":
        camps.push(article);
        break;
      case "COMPETITION":
        competitions.push(article);
        break;
      case "CONFERENCE":
        conferences.push(article);
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
      blogs,
      projects,
      camps,
      competitions,
      conferences,
      activities,
      meetings,
      none
    },
  };
}

export default Home;
