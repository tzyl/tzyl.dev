import ImageMetadata from "./image-metadata";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: ImageMetadata;
  ogImage: string;
  content: string;
};

export default Post;
