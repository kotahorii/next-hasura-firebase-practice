import '../styles/globals.css'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
