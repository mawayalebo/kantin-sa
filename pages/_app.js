import Layout from "../comps/Layout";
import "../materialize/css/materialize.css";

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
