import "../styles.scss";
import type { AppProps } from "next/app";
import { PageFooter } from "../components/layout/PageFooter";
import { SideNav } from "../components/layout/PageSideNav";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>External Patient Data</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <header>
        <SideNav></SideNav>
      </header>
      <main>
        <Component {...pageProps} />;
      </main>

      {/* <footer>
        <PageFooter></PageFooter>
      </footer> */}
    </>
  );
}
