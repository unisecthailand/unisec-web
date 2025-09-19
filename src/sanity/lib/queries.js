import { groq } from "next-sanity";

export const partnersQuery = groq`
  *[_type == "partner"] {
    _id,
    name,
    image,
  }
`;

export const sponsorsQuery = groq`
  *[_type == "sponsor"] {
    _id,
    name,
    image,
  }
`;
