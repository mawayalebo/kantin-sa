import Layout from "../comps/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  ) 
} 

export default MyApp
