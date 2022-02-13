import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { KnownImagePath } from "../generated/images";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: KnownImagePath;
  ogImage: KnownImagePath;
  content: string;
  mdxSource: MDXRemoteSerializeResult;
};

export default Post;
