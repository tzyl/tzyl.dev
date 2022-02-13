import { KnownImagePath, KNOWN_IMAGE_METADATA } from "../generated/images";

export const getKnownImagePath = (src: string | undefined): KnownImagePath => {
  if (!isKnownImagePath(src)) {
    throw new Error(`Invalid known image path ${src}`);
  }
  return src;
};

export const isKnownImagePath = (
  src: string | undefined
): src is KnownImagePath => {
  return (
    src != null && Object.values(KnownImagePath).includes(src as KnownImagePath)
  );
};

export const getImageMetadata = (
  imagePath: KnownImagePath
): { oneX: StaticImageData; twoX: StaticImageData } => {
  return KNOWN_IMAGE_METADATA[imagePath];
};

export const getOgImageUrl = (imagePath: KnownImagePath): string => {
  return getRawOgImageUrl(getImageMetadata(imagePath).twoX.src);
};

export const getRawOgImageUrl = (src: string): string => {
  return process.env.NEXT_PUBLIC_BASE_URL + src;
};
