import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const PostFooter = () => {
  return (
    <div className="py-8">
      <Link href="/blog">
        <a className="inline-flex items-center font-bold hover:text-green-300 transition-all duration-100">
          <FiArrowLeft className="mr-1" />
          Back to all posts
        </a>
      </Link>
    </div>
  );
};

export default PostFooter;
