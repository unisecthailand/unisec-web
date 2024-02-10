import CardList from "../CardList";
import Link from "next/link";

const Blog = ({ blogs }) => {
  return (
    <div className="container mx-auto">
      <div className="relative my-16">
        <h1 className="font-impact text-6xl md:text-8xl text-center text-gray-300">
          Blog
        </h1>
        <h1 className="absolute top-1 left-1/2 transform -translate-x-1/2 font-impact text-6xl md:text-8xl text-center ">
          Blog
        </h1>
      </div>
      <CardList cards={blogs} type="blog" />
      <div className="text-center mb-16 hover:underline">
        <Link href="/blog">See all</Link>
      </div>
    </div>
  );
};

export default Blog;
