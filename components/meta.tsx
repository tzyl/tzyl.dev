import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <meta name="description" content="Profile and blog for tzyl" />
      <meta property="og:title" content="tzyl.dev" />
      <meta property="og:description" content="Profile and blog for tzyl" />
      <meta
        key="og:image"
        property="og:image"
        content="/assets/favicon/android-chrome-512x512.png"
      />
    </Head>
  );
};

export default Meta;
