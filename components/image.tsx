import type { StaticImageData } from "next/image";

type Props = {
  className?: string;
  alt: string;
  oneX: StaticImageData;
  twoX: StaticImageData;
};

const Image = ({ className, alt, oneX, twoX }: Props) => {
  return (
    <img
      className={className}
      alt={alt}
      src={oneX.src}
      srcSet={`${oneX.src} 1x,${twoX.src} 2x`}
      width={oneX.width}
      height={oneX.height}
    />
  );
};

export default Image;
