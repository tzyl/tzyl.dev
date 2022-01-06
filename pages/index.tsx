import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import SectionHeader from "../components/section-header";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Home - tzyl</title>
      </Head>
      <Container>
        <PageHeader>tzyl</PageHeader>
        <div className="flex justify-center md:justify-start">
          <img
            className="rounded-full mb-8"
            src="/assets/profile.jpg"
            alt="Picture of tzyl"
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
