import { NextSeo } from "next-seo";
import Container from "../components/container";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostList from "../components/post-list";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  return (
    <Layout>
      <NextSeo
        title="Blog - tzyl"
        description="My latest thoughts on topics such as programming and mathematics."
      />
      <Container>
        <PageHeader>Blog</PageHeader>
        <section className="mb-16">
          <p className="mb-16">
            My latest thoughts on topics such as programming and mathematics.
          </p>
          <PostList posts={posts} />
        </section>
      </Container>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = getAllPosts(["slug", "title", "excerpt", "date", "coverImage"]);

  return {
    props: { posts },
  };
};
