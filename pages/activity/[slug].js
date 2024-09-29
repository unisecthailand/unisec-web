import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MicroCard from "../../components/Card/MicroCard";
import Parallex from "../../components/Parallex";

// import Link from "next/link";

// import fs from "fs";
// import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import sortByTimestamp from "../../utils/sortByTimestamp";
//import { getAllArticles, getArticlesById } from "../../utils/articles";

import { PortableText } from "next-sanity";
import { imageUrlFor, fileUrlFor } from "../../src/sanity/sanityClient";
import { getAllSlugs, getPostBySlug } from "../../src/sanity/sanityClient";

const textComponents = {
  types: {
    // Render images
    image: ({ value }) => (
      <div className="my-4">
        <img
          src={imageUrlFor(value).width(800).url()}
          alt={value.alt || 'Image'}
          className="rounded-md shadow-md" // Add your desired styles
        />
        {value.caption && (
          <p className="text-sm text-gray-500 font-serif italic">{value.caption}</p>
        )}
      </div>
    ),
    // Render file downloads
    file: ({ value }) => (
      <div className="my-4">
        <a href={fileUrlFor(value)} download className="text-blue-500 underline font-mono">
          Download File
        </a>
        {value.caption && (
          <p className="text-sm text-gray-500 font-serif italic">{value.caption}</p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-6xl font-bold mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-5xl font-bold mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-4xl font-bold mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-3xl font-bold mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-3xl mt-0">{children}</p>,
  },
  marks: {
    // Render links
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline font-sans"
      >
        {children}
      </a>
    ),
    // Render file links
    fileLink: ({ value, children }) => (
      <a href={fileUrlFor(value)}>
        {children}
      </a>
    ),
    // Strong text
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    // Emphasized text
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Code text
    code: ({ children }) => (
      <code className="bg-gray-200 p-1 rounded">{children}</code>
    ),
  },
};

const Blog = (props) => {
  if(props.type == "MEETING"){
    return (
      <div className="relative min-h-screen bg-gradient">
        <Header
          blog
          title={props.title}
          description={props.description}
          author={props.author}
          cover={props.cover}
        />
        <main className="pb-20 pt-24">
          <Navbar />
          <div className="flex justify-center">
            <img src={imageUrlFor(props.cover).url()} className="meeting-image"></img>
          </div>
          <div className="">
            <div className="container mx-auto p-8 border-b-2 border-white">
              <h1 className="break-words font-bold text-5xl font-helvethaica-med-cond my-4">
                {props.title}
              </h1>
              <article>
                <PortableText value={props.body} components={textComponents} />
              </article>
            </div>
          </div>
          {props.youtube != 'none' &&
            <div className="container mx-auto p-6 flex justify-center border-b-2 border-white">
              <iframe width="960" height="540"
                src={"https://www.youtube.com/embed/" + props.youtube}>
              </iframe>
            </div>
          }
          {props.capture &&
            <div className="flex justify-center p-6">
              <img src={imageUrlFor(props.capture).url()} className="meeting-image"></img>
            </div>
          }
        </main>
        <footer className="absolute top-full w-full">
          <Footer />
        </footer>
      </div>
    );
  }
  else{
    return (
      <div className="relative min-h-screen bg-gradient">
        <Header
          blog
          title={props.title}
          description={props.description}
          author={props.author}
          cover={props.cover}
        />

        <main className="pb-20 pt-24">
          <Navbar />
          <Parallex
            image={props.cover ?? "/assets/space.webp"}
            darken={true}
          >
            <div className="w-full mx-auto">
              <div className="font-helvethaica-med-cond text-2xl lg:text-3xl text-center text-shadow">
                {"UNISEC Thailand"}
              </div>
              <h1 className="font-helvethaica-blk-cond text-4xl lg:text-6xl text-center text-shadow">
                {props.title}
              </h1>
              <div className="text-gray-100 text-center mt-16 text-shadow">
                {
                props.date_to == undefined ? 
                new Date(props.date).toLocaleDateString("en-EN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) :
                new Date(props.date).toLocaleDateString("en-EN", {
                  month: "long",
                  day: "numeric",
                }) + " - " +
                new Date(props.date_to).toLocaleDateString("en-EN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                }
              </div>
            </div>
          </Parallex>
          <div className="">
            <div className="container mx-auto p-8 border-white">
              <h1 className="break-words font-bold text-5xl font-helvethaica-med-cond my-4">
                {props.title}
              </h1>
              <article>
                {/* <ReactMarkdown>{props.body}</ReactMarkdown> */}
              </article>
            </div>
          </div>
        </main>

        {/* <footer className="absolute top-full w-full">
          <Footer
            blogs={sortByTimestamp(props.blogs)}
            projects={sortByTimestamp(props.projects)}
          />
        </footer> */}
      </div>
    );
}    
};

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;
  const articles = await getPostBySlug(slug);
  return {
    props: {
      ...articles,
    }
  }
}

export async function getStaticPaths() {
  const activities = await getAllSlugs();
  const paths = activities.map((activity) => ({
    params: { slug: activity.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Blog;
