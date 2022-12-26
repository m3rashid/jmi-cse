import { Button, ConfigProvider, Layout, Menu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

import { config } from './config';
import { HeaderDropDown, aboutUs, academic, research } from './headerData';

interface IProps extends PropsWithChildren {}

const dataMap = [
  { label: 'About Us', data: aboutUs },
  { label: 'Academic', data: academic },
  { label: 'Research', data: research },
];

const RootWrapper: React.FC<IProps> = ({ children }) => {
  const router = useRouter();
  const push = (path: string) => {
    if (router.asPath === path) return;
    router.push(path, undefined, { shallow: true });
  };

  return (
    <ConfigProvider {...config}>
      <Layout>
        <Layout.Header
          className='flex flex-row items-center justify-between'
          style={{ background: 'white' }}
        >
          <Image
            src='/images/logo_green.png'
            alt='Logo'
            width={305}
            height={65}
            className='cursor-pointer mr-4'
          />

          <div className='flex items-center gap-2'>
            <Button style={{ border: 0 }} onClick={() => push('/')}>
              Home
            </Button>
            <Button style={{ border: 0 }} onClick={() => push('/placements')}>
              Placements
            </Button>
            <HeaderDropDown buttonLabel='About Us' data={aboutUs} />
            <HeaderDropDown buttonLabel='Academic' data={academic} />
            <HeaderDropDown buttonLabel='Research' data={research} />
            {/* <HeaderDropDown buttonLabel='About Us' data={} /> */}
          </div>
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default RootWrapper;
