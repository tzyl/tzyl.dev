import { DefaultSeo } from "next-seo";
import { getRawOgImageUrl } from "../lib/images";

const Meta = () => {
  return (
    <DefaultSeo
      title="tzyl.dev"
      description="Profile and blog for tzyl"
      openGraph={{
        type: "website",
        title: "tzyl.dev",
        description: "Profile and blog for tzyl",
        images: [
          {
            url: getRawOgImageUrl("/assets/favicon/android-chrome-512x512.png"),
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/favicon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/assets/favicon/site.webmanifest",
        },
      ]}
    />
  );
};

export default Meta;
