import { Button, Result } from 'antd';
import React from 'react';

interface IProps {}

const NotFound: React.FC<IProps> = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={<Button type='primary'>Back Home</Button>}
    />
  );
};

export default NotFound;
