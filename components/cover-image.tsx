import classNames from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={classNames("shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    />
  );
  return slug ? (
    <Link as={`/blog/${slug}`} href="/blog/[slug]">
      <a aria-label={title}>{image}</a>
    </Link>
  ) : (
    image
  );
};

export default CoverImage;
