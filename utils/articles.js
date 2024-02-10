import fs from "fs";

const getAllArticles = () => {
  const files = fs
    .readdirSync("posts", "utf-8")
    .filter((fn) => fn.endsWith(".md"));
  return files;
};

const getArticlesById = async (id) => {
  const content = await import(`./../posts/${id}.md`);
  return content;
};

export { getAllArticles, getArticlesById };
