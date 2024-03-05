import { AppProps } from "next/app";
import "../styles/globals.css";
import ApolloSetting from "../src/components/commons/apollo/index";
import Layout from "../src/components/commons/layout";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
