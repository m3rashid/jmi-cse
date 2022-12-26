import '../styles/tailwind.css';
import 'antd/dist/reset.css';

import type { AppProps } from 'next/app';
import RootWrapper from '../components/rootWrapper';
import PageWrapper from '../components/pageWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootWrapper>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </RootWrapper>
  );
}
