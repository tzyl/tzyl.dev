import classNames from "classnames";
import Link from "next/link";
import { KnownImagePath } from "../generated/images";
import KnownImage from "./known-image";

type Props = {
  title: string;
  imagePath: KnownImagePath;
  slug?: string;
};

const CoverImage = ({ title, imagePath, slug }: Props) => {
  const image = (
    <KnownImage
      className={classNames("shadow", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      alt={`Cover Image for ${title}`}
      imagePath={imagePath}
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
