import { Card, Col, Image, Row, Typography } from 'antd';
import React, { useState } from 'react';

import { facultyList, facultyDetails } from '../../data/facultyMembers';

interface IProps {}

const FacultyMembers: React.FC<IProps> = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Typography.Title>Faculty Members</Typography.Title>
      <Row>
        <Col span={8}>
          {facultyList.map((f, index) => (
            <Card
              key={f.id}
              onClick={() => handleSelect(index)}
              className='mb-2 cursor-pointer mr-2'
            >
              <Card.Meta
                avatar={
                  <Image
                    height={75}
                    width={75}
                    src={f.avatar}
                    alt={f.name}
                    className='rounded-md'
                  />
                }
                title={f.name}
                description={f.department}
              />
              <br />
              <Typography.Text>{f.bio}</Typography.Text>
            </Card>
          ))}
        </Col>

        <Col span={16}>
          <Card title={facultyDetails[selected].name}>
            <Typography.Text>
              {facultyDetails[selected].department}
            </Typography.Text>

            <br />

            <Typography.Text>
              Address: {facultyDetails[selected].address}
            </Typography.Text>

            <br />

            <Typography.Text>
              Phone: {facultyDetails[selected].phone}
            </Typography.Text>

            <br />
            <Typography.Text className='mr-2'>Emails: </Typography.Text>
            {facultyDetails[selected].emails.map((e, i) => (
              <Typography.Text className='mr-2' key={`email${i}`}>
                {e},
              </Typography.Text>
            ))}

            {facultyDetails[selected].description.length > 0 && (
              <>
                <br />
                <br />

                {facultyDetails[selected].description.map((d) => (
                  <div key={d.id} className='mb-2'>
                    <Typography.Text>{d.text}</Typography.Text>
                  </div>
                ))}
              </>
            )}

            {facultyDetails[selected].classesTaught.length > 0 && (
              <>
                <br />
                <br />

                <Typography.Title level={4}>Classes Taught</Typography.Title>
                {facultyDetails[selected].classesTaught.map((cl) => (
                  <div key={cl.id}>
                    <Typography.Text>{cl.text}</Typography.Text>
                  </div>
                ))}
              </>
            )}

            {facultyDetails[selected].coursesTaught.length > 0 && (
              <>
                <br />
                <br />

                <Typography.Title level={4}>Courses Taught</Typography.Title>
                {facultyDetails[selected].coursesTaught.map((ct) => (
                  <div key={ct.id}>
                    <Typography.Text>{ct.text}</Typography.Text>
                  </div>
                ))}
              </>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FacultyMembers;
