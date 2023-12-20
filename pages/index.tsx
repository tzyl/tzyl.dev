import { NextSeo } from "next-seo";
import Container from "../components/container";
import KnownImage from "../components/known-image";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import SectionHeader from "../components/section-header";
import { KnownImagePath } from "../generated/images";
import { getOgImageUrl } from "../lib/images";

const Index = () => {
  return (
    <Layout>
      <NextSeo
        title="Home - tzyl"
        openGraph={{
          images: [{ url: getOgImageUrl(KnownImagePath.PROFILE_PROFILE_JPG) }],
        }}
      />
      <Container>
        <PageHeader>tzyl</PageHeader>
        <div className="flex justify-center md:justify-start">
          <KnownImage
            className="mb-8 rounded-full"
            alt="Picture of tzyl"
            imagePath={KnownImagePath.PROFILE_PROFILE_JPG}
          />
        </div>
        <section>
          <SectionHeader>About me</SectionHeader>
          <p className="mb-3">Hi! I&apos;m Tim.</p>
          <p className="mb-3">
            I&apos;m a software engineer currently working at Palantir. In my
            previous life I studied Mathematics at the University of Oxford.
            I&apos;m passionate about continuous intellectual curiosity and love
            programming and problem solving.
          </p>
          <p className="mb-3">
            Check out my blog for personal thoughts on various topics that have
            interested me.
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default Index;
