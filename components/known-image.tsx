import React from "react";
import Image from "../components/image";
import { getImageMetadata, KnownImagePath } from "../lib/images";

type Props = {
  className?: string;
  alt: string;
  imagePath: KnownImagePath;
};

const KnownImage = ({ className, alt, imagePath }: Props) => {
  return (
    <Image className={className} alt={alt} {...getImageMetadata(imagePath)} />
  );
};

export default KnownImage;
