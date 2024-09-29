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
export const urlFor = (source) => builder.image(source);

export async function getPostBySlug({slug}) {
    const query = `*[_type == "post" && slug.current == "${slug}"]{
        slug,
        title,
        type,
        date,
        date_to,
        author,
        description,
        cover,
        body,
      }`
    const post = await client.fetch(query);
    return post
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

export async function getMeetingPostBySlug({slug}) {
    const query = `*[_type == "meeting-post" && slug.current == "${slug}"]{
        slug,
        title,
        type,
        date,
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
    const meetingPost = await client.fetch(query);
    return meetingPost
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