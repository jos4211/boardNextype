import { AppProps } from 'next/app'
import PageHeader from "../components/pageHeader";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader/>
      <Component {...pageProps} />
    </>
  )
}

export default App