import Head from "next/head";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Next.js on Now</title>
      </Head>
      <h1>Next.js on Now</h1>
      <h2>
        Developed & Deployed with{" "}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
    </main>
  );
}
