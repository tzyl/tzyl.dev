import React from "react";
import Image from "../components/image";
import { KnownImagePath, KNOWN_IMAGE_METADATA } from "../lib/images";

type Props = {
  className?: string;
  alt: string;
  imagePath: KnownImagePath;
};

const KnownImage = ({ className, alt, imagePath }: Props) => {
  return (
    <Image
      className={className}
      alt={alt}
      {...KNOWN_IMAGE_METADATA[imagePath]}
    />
  );
};

export default KnownImage;
