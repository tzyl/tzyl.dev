import classNames from "classnames";
import Link from "next/link";
import ImageMetadata from "../types/image-metadata";

type Props = {
  title: string;
  imageMetadata: ImageMetadata;
  slug?: string;
};

const CoverImage = ({
  title,
  imageMetadata: { src, width, height },
  slug,
}: Props) => {
  const image = (
    <img
      src={src}
      width={width}
      height={height}
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
