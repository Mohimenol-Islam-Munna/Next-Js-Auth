import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { SessionProvider } from "next-auth/react"

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar></Navbar>
        <Component {...pageProps} />{" "}
      </SessionProvider>
    </>
  );
}

export default MyApp;
