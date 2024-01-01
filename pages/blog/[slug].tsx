import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Head from "next/head";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import PostFooter from "../../components/post-footer";
import PostHeader from "../../components/post-header";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { getOgImageUrl } from "../../lib/images";
import Post from "../../types/post";

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => {
  return (
    <Layout>
      <NextSeo
        title={`${post.title} - tzyl`}
        description={post.excerpt}
        openGraph={{ images: [{ url: getOgImageUrl(post.ogImage) }] }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
          integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/vs2015.min.css"
          integrity="sha256-Pi771++jBrwgeHVYGOa1sjN8idXlrrYSKQVI7+JA54k="
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
    "excerpt",
    "date",
    "coverImage",
    "ogImage",
    "content",
  ]);

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeExternalLinks, rehypeHighlight as any, rehypeKatex],
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
