import Head from "next/head";
import { imageUrlFor } from "../src/sanity/sanityClient";

const Header = ({ blog, title, description, author, cover }) => {
  if (blog) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="UNISEC, UNISEC Thailand, Thailand, Space, อวกาศ, ประเทศไทย"
          />
          <meta name="author" content={author ?? "UNISEC Thailand"} />
          <meta property="og:title" content={`${title} | UNISEC Thailand`} />
          <meta property="og:site_name" content="UNISEC Thailand" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content={cover ? imageUrlFor(cover).url() : "/assets/space.jpeg"}
          />
        </Head>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>UNISEC Thailand</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="UNISEC Thailand" />
          <meta
            name="keywords"
            content="UNISEC, UNISEC Thailand, Thailand, Space, อวกาศ, ประเทศไทย"
          />
          <meta name="author" content="UNISEC Thailand" />
          <meta property="og:title" content="UNISEC Thailand" />
          <meta property="og:site_name" content="UNISEC Thailand" />
          <meta property="og:description" content="UNISEC Thailand" />
          <meta property="og:image" content="/assets/image.jpeg" />
        </Head>
      </>
    );
  }
};

export default Header;
