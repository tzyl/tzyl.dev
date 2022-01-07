import Link from "next/link";
import ImageMetadata from "../types/image-metadata";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: ImageMetadata;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} imageMetadata={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
