import Post from "../types/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImagePath={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
};

export default PostList;
