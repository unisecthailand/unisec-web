import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import fs from "fs";
import matter from "gray-matter";

import sortByTimestamp from "../utils/sortByTimestamp";
import { getAllArticles } from "../utils/articles";

import Link from "next/link";

const custom404 = (props) => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pb-20">
        <Navbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-lg">404 | This page could not be found.</h2>
          <div className="mt-4">
            Return to{" "}
            <span className="underline">
              <Link href="/">Home</Link>
            </span>
          </div>
        </div>
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

export async function getStaticProps(ctx) {
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

export default custom404;
