import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import store from "@/store/store";
import { Provider } from "react-redux";
import Alert from "@/components/Alert";
import ContextApi from "@/utils/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Shoes Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <Provider store={store}>
        <ContextApi>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Alert />
        </ContextApi>
      </Provider>
    </>
  );
}
