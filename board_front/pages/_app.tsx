import { AppProps } from 'next/app'
import PageHeader from "../components/pageHeader.js";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader/>
      <Component {...pageProps} />
    </>
  )
}

export default App