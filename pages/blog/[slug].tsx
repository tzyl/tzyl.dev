import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import PostFooter from "../../components/post-footer";
import PostHeader from "../../components/post-header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { KNOWN_IMAGE_METADATA } from "../../lib/images";
import Post from "../../types/post";

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{post.title} - tzyl</title>
        <meta
          key="og:image"
          property="og:image"
          content={KNOWN_IMAGE_METADATA[post.ogImage].twoX.src}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
          integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
          crossOrigin="anonymous"
        />
      </Head>
      <Container>
        <article>
          <PostHeader
            title={post.title}
            coverImagePath={post.coverImage}
            date={post.date}
          />
          <PostBody mdxSource={post.mdxSource} />
          <PostFooter />
        </article>
      </Container>
    </Layout>
  );
};

export default BlogPost;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "coverImage",
    "ogImage",
    "content",
  ]);

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeExternalLinks],
    },
  });

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
