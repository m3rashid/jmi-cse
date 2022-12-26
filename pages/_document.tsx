import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          href='/images/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='shortcut icon'
          href='/images/favicon.ico'
          type='image/x-icon'
        />
        <meta name='image' content='https://jmicse.vercel.app/favicon.ico' />
        <meta name='og:image' content='https://jmicse.vercel.app/favicon.ico' />
        <meta
          name='twitter:image'
          content='https://jmicse.vercel.app/favicon.ico'
        />
        <meta name='og:url' content='https://jmicse.vercel.app/' />
        <meta
          name='description'
          content='Official website of the JMI Computer Science and Engineering Department'
        />
        <meta
          name='og:description'
          content='Official website of the JMI Computer Science and Engineering Department'
        />
        <meta
          name='twitter:description'
          content='Official website of the JMI Computer Science and Engineering Department'
        />
        <meta
          name='keywords'
          content='JMI, jmi, JAMIA, jamia, delhi, cse, computer-science, cse, CSE, computer, science'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
