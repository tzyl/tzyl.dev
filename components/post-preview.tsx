import Link from "next/link";
import { KnownImagePath } from "../generated/images";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImagePath: KnownImagePath;
};

const PostPreview = ({ title, coverImagePath, date, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5 flex">
        <CoverImage slug={slug} title={title} imagePath={coverImagePath} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/blog/${slug}`}
          href="/blog/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
