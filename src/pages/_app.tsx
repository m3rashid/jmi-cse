import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { withTRPC } from '@trpc/next'
import { AppType } from 'next/dist/shared/lib/utils'

import 'styles/globals.css'
import RootWrapper from 'components/globals/rootWrapper'
import PageWrapper from 'components/globals/pageWrapper'

import { AppRouter } from 'pages/api/trpc/[trpc]'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <RootWrapper>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </RootWrapper>
    </SessionProvider>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp)
