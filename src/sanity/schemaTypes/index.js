import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { meetingPostType } from "./meetingPostType";
import { bannerType } from "./bannerType";
import { partnerType } from "./partnerType";
import { sponsorType } from "./sponsorType";

export const schema = {
  types: [
    blockContentType,
    postType,
    meetingPostType,
    bannerType,
    partnerType,
    sponsorType,
  ],
};
