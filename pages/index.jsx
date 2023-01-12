import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Clone By NextJS</title>
        <meta name="description" content="clone a google web app by next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-green-600">welcome!</h1>
      </main>
    </>
  );
}
