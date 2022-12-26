import { Card, Col, Row, Typography } from 'antd';
import React from 'react';

interface IProps {}

const VisionMission: React.FC<IProps> = () => {
  return (
    <div className='mt-8'>
      <Row>
        <Col span={4} />
        <Col span={16}>
          <Card title='Vision' bordered={false}>
            To produce excellent professionals and innovators in the field of
            Computer Engineering for the economic development and global
            competitiveness of the nation
          </Card>
        </Col>
        <Col span={4} />
      </Row>
      <br />
      <br />
      <Row>
        <Col span={4} />
        <Col span={16}>
          <Card title='Mission' bordered={false}>
            <Typography.Text>
              To impart proactive education that focuses on intellectually
              vibrant instructions, sound practical training learning and
              project-based learning.
            </Typography.Text>
            <br />
            <Typography.Text>
              To prepare the students for high-quality research and industry
              oriented innovation.
            </Typography.Text>
            <br />
            <Typography.Text>
              To prepare the students for immediate career success and lifelong
              challenges global in global industrial needs.
            </Typography.Text>
            <br />
            <Typography.Text>
              To educate the students and to make them ethically and socially
              responsible citizens for national and global development.
            </Typography.Text>
          </Card>
        </Col>
        <Col span={4} />
      </Row>
    </div>
  );
};

export default VisionMission;
