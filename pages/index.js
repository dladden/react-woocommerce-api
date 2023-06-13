import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import axios from "axios";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.warn("props", props);
  return (
    <div>
      <Header />
      <main>
        <h1>TEST TEST TEST TEST TEST</h1>
        <p>hello</p>
      </main>
      <Footer />
    </div>
  );
}
/**
 *AXIOS: get static props request from wordpress using REST API using async await (asynchronous code that doesn't block the execution of other code while
 * waiting for an asynchronous operation to complete) tt works with promises and uses the await keyword to pause the function execution until the promise settles.
 * Stores it in const data and returns it as props. Revalidate makes it so that the data is always available in cache.
 */
export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
  );

  return {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
