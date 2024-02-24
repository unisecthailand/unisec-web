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
import { useRouter } from "next/router"

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

  const handleScroll = event => {
  try{
    var pp = (250-window.scrollY)/250 *100;
    if(pp < 0) pp = 0;
    if(window.innerWidth > 1280){
      var maxWidth = 520;

      document.getElementById("logo").style.left = (48+((window.innerWidth/2-maxWidth)/2-48)/100*pp) + "px";
      document.getElementById("logo").style.width = (112+(maxWidth-112)/100*pp) + "px";
      document.getElementById("logo").style.top = (8+(108-8)/100*pp) + "px";

    } else if(window.innerWidth < 768){
      var pp = (150-window.scrollY)/150 *100;
      if(pp < 0) pp = 0;

      var maxWidth = window.innerWidth-120;

      document.getElementById("logo").style.left = (48+(60-48)/100*pp) + "px";
      document.getElementById("logo").style.width = (112+(maxWidth-112)/100*pp) + "px";
      document.getElementById("logo").style.top = (8+(80-8)/100*pp) + "px";
      document.getElementById("logo-block").style.height = (20 + maxWidth/113*40) + "px"

    } else{
      var maxWidth = window.innerWidth/2-120;
      var offsetTop = (document.getElementById("home-text").offsetHeight-150)/2;

      document.getElementById("logo").style.left = "48px";
      document.getElementById("logo").style.width = (112+(maxWidth-112)/100*pp) + "px";
      document.getElementById("logo").style.top = (8+(100+offsetTop-8)/100*pp) + "px";
    }
  }
  catch(e){}
};

  const router = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    router.events.on('routeChangeComplete', handleScroll);
  }, [])

  handleScroll();

  return (
    <div className="relative min-h-screen bg-gradient">
      <Header />
      <main className="pb-20">
        <Navbar page="home"/>
        <br></br>
        <div className="pt-16 px-4 lg:px-16 md:px-8 lg:pb-0">
          <div className="grid mb-12 grid-cols-1 md:grid-cols-2">
            <div className="grid gap-8" id="logo-block">
            </div>
            <div className="relative m-4" id="home-text">
              <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
                <div className="p-6 text-sm xl:text-base lg:h-44" data-aos="fade">
                  UNISEC-Global is an international nonprofit body, consisting of
                  local-chapters across the world. Since its establishment in
                  November 2013 in Japan, UNISEC-Global has provided a forum every
                  year to promote practical space development activities, mainly at
                  university level.
                </div>
              </div>
              <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 h-full"></div>
            </div>
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
