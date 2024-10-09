import {createClient} from '@sanity/client'
import { dataset, projectId } from './env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client);
export const imageUrlFor = (source) => builder.image(source);
export const fileUrlFor = (file) => {
    if (!file || !file.file.asset || !file.file.asset._ref) {
      return null;
    }
    
    const fileId = file.file.asset._ref.split('-')[1]; // Extract file ID from reference
    const fileType = file.file.asset._ref.split('-')[2]; // Extract file ID from reference
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.${fileType}`;
  };

export async function getPostBySlug(slug) {
    const query = `*[(_type == "meeting-post" || _type == "post") && slug.current == "${slug}"][0]{
        slug,
        title,
        type,
        date,
        date_to,
        author,
        description,
        cover,
        cover4b3,
        capture,
        youtube,
        body,
        schedule,
        report,
        powerpoint,
        }`
    const post = await client.fetch(query);
    return post
}

export async function getAllSlugs() {
    const query = `*[(_type == "meeting-post" || _type == "post")]{
        slug,
        }`
    const slugs = await client.fetch(query);
    return slugs
}

export async function getAllPosts() {
    const query = `*[_type == "post"]{
        slug,
        title,
        type,
        date,
        author,
        description,
        cover,
        cover4b3,
        }`
    const posts = await client.fetch(query);
    return posts
}

export async function getAllMeetingPosts() {
    const query = `*[_type == "meeting-post"]{
        slug,
        title,
        type,
        date,
        author,
        description,
        cover,
        cover4b3,
        }`
    const meetingPosts = await client.fetch(query);
    return meetingPosts
}

export async function getBanners() {
    const query = `*[_type == "banner"]{
        slug,
        title,
        date,
        author,
        description,
        cover,
        extlink,
        "post": RefPost->{
            slug,
            title,
            date,
            author,
            description,
            cover
        }
        }`
    const banners = await client.fetch(query);
    banners.forEach((banner) => {
      if(banner.post != null){
        banner.title=banner.post.title;
        banner.date=banner.post.date;
        banner.author=banner.post.author;
        banner.description=banner.post.description;
        banner.cover=banner.post.cover;
        banner.slug=banner.post.slug.current;
      }
    })
    return banners
}