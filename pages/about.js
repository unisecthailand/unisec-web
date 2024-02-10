import fs from "fs";
import matter from "gray-matter";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Unisec from "../components/About/Unisec";
import Mission from "../components/About/Mission";
import Partnership from "../components/Partnership";

import Divider from "../components/Divider";
import Footer from "../components/Footer";

import sortByTimestamp from "../utils/sortByTimestamp";
import { getAllArticles } from "../utils/articles";

const About = (props) => {
  return (
    <div className="relative min-h-screen bg-about">
      <Header />

      <main className="py-20 lg:pt-40 xl:py-20">
        <Navbar />
        <Unisec />
        <Divider />
        <Mission />
        <Divider />
        {/*
        <TeamMember />
        <Divider /> */}
        <a className="anchor" id="partnership"></a>
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
};

export async function getStaticProps() {
  // Get All Markdown files
  const files = await getAllArticles();
  const articles = files.map((file) => {
    const data = fs.readFileSync(`posts/${file}`).toString();
    return { ...matter(data).data, id: file.split(".")[0] };
  });

  const blogs = [];
  const projects = [];

  articles.forEach((article) => {
    switch (article.type) {
      case "BLOG":
        blogs.push(article);
        break;
      case "PROJECT":
        projects.push(article);
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
    },
  };
}

export default About;
