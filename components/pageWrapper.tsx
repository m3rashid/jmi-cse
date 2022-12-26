import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {}

const PageWrapper: React.FC<IProps> = ({ children }) => {
  const { pathname: path } = useRouter();

  const title = path
    .split('/')
    .slice(-1)[0]
    .toLocaleUpperCase()
    .replaceAll('-', ' ');

  const pageTitle = title ? `${title} | JMI CSE` : 'JMI CSE';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='og:title' content={pageTitle} />
        <meta name='twitter:title' content={pageTitle} />
      </Head>
      <div className='min-h-screen pt-8 pb-8 pl-12 pr-12'>{children}</div>
    </>
  );
};

export default PageWrapper;
