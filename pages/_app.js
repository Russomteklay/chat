import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

//
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

//

import { ContextProvider } from '../context'

export default function App({ Component, pageProps }) {
//
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
//
  return (
     <ContextProvider>
    <Component {...pageProps} />
    </ContextProvider>
  );
}
