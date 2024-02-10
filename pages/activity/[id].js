import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MicroCard from "../../components/Card/MicroCard";
import Parallex from "../../components/Parallex";

import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import sortByTimestamp from "../../utils/sortByTimestamp";
import { getAllArticles, getArticlesById } from "../../utils/articles";

const Blog = (props) => {
  const frontmatter = props.frontmatter;

  if(frontmatter.type == "MEETING"){
    return (
      <div className="relative min-h-screen">
        <Header
          blog
          title={frontmatter.title}
          description={frontmatter.description}
          author={frontmatter.author}
          cover={frontmatter.cover}
        />
        <main className="pb-20 pt-16">
          <Navbar />
          <div className="flex justify-center">
            <img src={props.frontmatter.cover ?? "/assets/space.webp"} className="meeting-image"></img>
          </div>
          <div className="bg-custom-primary">
            <div className="container mx-auto p-8 border-b-2 border-white">
              <h1 className="break-words font-bold text-5xl font-helvethaica-med-cond my-4">
                {frontmatter.title}
              </h1>
              <article>
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">{props.body}</ReactMarkdown>
              </article>
            </div>
          </div>
          <div className="container mx-auto pt-4 flex justify-center">
            <iframe width="960" height="540"
              src={"https://www.youtube.com/embed/" + frontmatter.youtube}>
            </iframe>
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
  }
  else{
    return (
      <div className="relative min-h-screen">
        <Header
          blog
          title={frontmatter.title}
          description={frontmatter.description}
          author={frontmatter.author}
          cover={frontmatter.cover}
        />

        <main className="pb-20">
          <Navbar />
          <Parallex
            image={props.frontmatter.cover ?? "/assets/space.webp"}
            darken={true}
          >
            <div className="w-full mx-auto">
              <div className="font-helvethaica-med-cond text-2xl lg:text-3xl text-center text-shadow">
                {"UNISEC Thailand"}
              </div>
              <h1 className="font-helvethaica-blk-cond text-4xl lg:text-6xl text-center text-shadow">
                {frontmatter.title}
              </h1>
              <div className="text-gray-100 text-center mt-16 text-shadow">
                {new Date(frontmatter.date).toLocaleDateString("en-EN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </Parallex>
          <div className="bg-custom-primary">
            <div className="container mx-auto p-8 border-white">
              <h1 className="break-words font-bold text-5xl font-helvethaica-med-cond my-4">
                {frontmatter.title}
              </h1>
              <article>
                <ReactMarkdown>{props.body}</ReactMarkdown>
              </article>
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
}    
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
  const meetings = [];

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
      case "MEETING":
        meetings.push(article);
        break;
      default:
        break;
    }
    return;
  });

  // Markdown Files
  const id = ctx.params.id;
  const content = await getArticlesById(id);
  const data = matter(content.default);

  return {
    props: {
      title: id,
      frontmatter: data.data,
      body: data.content,
      blogs,
      projects,
      camps,
      competitions,
      conferences,
      meetings,
    },
  };
}

export async function getStaticPaths() {
  // Markdown Paths
  const files = await getAllArticles();
  const paths = files.map((file) => {
    const data = fs.readFileSync(`posts/${file}`).toString();

    return {
      params: { ...matter(data).data, id: file.split(".")[0] },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Blog;
