import { ImgHTMLAttributes } from "react";
import { getKnownImagePath } from "../lib/images";
import KnownImage from "./known-image";

const MdxImage = ({ alt, src }: ImgHTMLAttributes<HTMLImageElement>) => (
  <KnownImage alt={alt ?? ""} imagePath={getKnownImagePath(src)} />
);

export default MdxImage;
