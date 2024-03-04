import { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../src/components/commons/layout";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloProvider>
  );
}
