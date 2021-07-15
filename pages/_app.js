import Layout from "../comps/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  ) 
} 

export default MyApp
