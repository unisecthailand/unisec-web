import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Activity from "../components/Home/Activity";
import Partnership from "../components/Partnership";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

import sortByTimestamp from "../utils/sortByTimestamp";
import { getAllPosts, getAllMeetingPosts } from "../src/sanity/sanityClient";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";

function Home(props) {
  const blogs = props.meetings.concat(props.upcommings)
  const latestBlogs = sortByTimestamp(blogs).slice(0,4);
  const [index, setIndex] = useState(0);
  //console.log(latestBlogs)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(seconds => (seconds === latestBlogs.length-1 ? 0 : seconds + 1));
    }, 10000);

    return () => clearInterval(interval)
  }, [])

  const handleScroll = event => {
  try{
    let userWidth = window.innerWidth;
    var pp = (250-window.scrollY)/250 *100;
    if(pp < 0) pp = 0;
    if(pp > 100) pp = 100;
    if(userWidth > 960){
      var maxWidth = 420;

      document.getElementById("logo").style.left = (48+((userWidth/2-maxWidth)/2-48)/100*pp) + "px";
      document.getElementById("logo").style.width = (121+(maxWidth-121)/100*pp) + "px";
      document.getElementById("logo").style.top = (11+(60-11)/100*pp) + "px";
      document.getElementById("home-text").style.display = "block";

    } else if(userWidth < 768){

      var ppMax = 0.4*userWidth-28.6;
      var pp = (ppMax-window.scrollY)/ppMax *100;
      if(pp < 0) pp = 0;
      if(pp > 100) pp = 100;
      var maxWidth = userWidth-260;
      var offsetTopFactor = 0.22
      var offsetLeftFactor = 0.8
      if(userWidth < 560){
        maxWidth = userWidth-120;
        offsetTopFactor = 0.5
        offsetLeftFactor = 0.2
      }
      document.getElementById("logo").style.left = (48+offsetLeftFactor*pp) + "px";
      document.getElementById("logo").style.width = (121+(maxWidth-121)/100*pp) + "px";
      document.getElementById("logo").style.top = (11+offsetTopFactor*pp) + "px";
      document.getElementById("logo-block").style.height = (maxWidth/113*40)-50 + "px";
      document.getElementById("home-text").style.display = "none";

    } else{
      var maxWidth = userWidth/2-121;
      var offsetTop = (document.getElementById("home-text").offsetHeight-200)/2;

      document.getElementById("logo").style.left = "48px";
      document.getElementById("logo").style.width = (121+(maxWidth-121)/100*pp) + "px";
      document.getElementById("logo").style.top = (11+(100+offsetTop-11)/100*pp) + "px";
      document.getElementById("home-text").style.display = "block";
    }
  }
  catch(e){}
  };

  const router = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    router.events.on('routeChangeComplete', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
  }, [])

  handleScroll();

  return (
    <div className="relative min-h-screen bg-gradient">
      <Header />
      <main className="pb-20">
        <Navbar page="home"/>
        <br></br>
        <div className="pt-16 px-4 lg:px-16 md:px-8 lg:pb-0">
          <div className="grid mb-32 grid-cols-1 md:grid-cols-2 md:mb-12">
            <div className="grid gap-8" id="logo-block">
            </div>
            <div className="relative m-4" id="home-text">
              <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20">
                <div className="p-4 text-sm xl:text-base lg:h-44" data-aos="fade">
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
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const meetings = await getAllMeetingPosts();
  const articles = await getAllPosts();
  const blogs = [];
  const projects = [];
  const camps = [];
  const competitions = [];
  const conferences = [];
  const upcommings = [];
  const activities = [];
  const none = [];

  articles.forEach((article) => {
    switch (article.type) {
      case "UPCOMMING":
        upcommings.push(article);
        break;
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
      upcommings,
      blogs,
      projects,
      camps,
      competitions,
      conferences,
      activities,
      meetings,
      none
    },
    revalidate: 300,
  };
}

export default Home;
