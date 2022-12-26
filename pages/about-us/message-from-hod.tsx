import { Card, Col, Row, Typography } from 'antd';
import React from 'react';

interface IProps {}

const MessageFromHod: React.FC<IProps> = () => {
  return (
    <div>
      <Row className='mt-8'>
        <Col span={4} />
        <Col span={16}>
          <Card title='Message from HOD' bordered={false}>
            <Typography.Text>
              To fulfil the growing demand of Computer Engineers in the
              Government and private sectors, the Department is making best
              efforts to produce highly trained and capable engineers who can
              take up the challenges of the real world.
            </Typography.Text>
            <br />

            <Typography.Text>
              The two key objectives of the department are to maintain high
              academic standards and to give due weightage to practical work.
              The department has a fine blend of renowned as well as young and
              dynamic personalities as faculty, who are involved in imparting
              quality education. The faculty strives to foster and encourage a
              teaching methodology that is both practical and theoretical in
              approach. This orientation has led to successful projects and
              training.
            </Typography.Text>
            <br />

            <Typography.Text>
              The lab facilities are being upgraded from time to time and
              provide adequate opportunities for the students to learn and
              innovate . The Department also organizes interactive lectures
              every week by inviting Alumni and Technocrats from industries for
              the overall development of students.
            </Typography.Text>
            <br />

            <Typography.Text>
              Departmental society has been established by the students for the
              extra curricular activities. This society conducts various
              technical and cultural events regularly. “Engineers are the
              creators of the new world”, going with these lines the Department
              has a fully equipped Project lab to encourage the students to show
              their creativity. Educational tours and industrial visits are
              regularly organized to enhance the practical knowledge of the
              students with the recent technologies used in the industries.
            </Typography.Text>

            <br />
            <br />

            <Typography.Text>Best wishes,</Typography.Text>
            <br />

            <Typography.Text>Prof. Bashir Alam</Typography.Text>
            <br />

            <Typography.Text>Head of Department</Typography.Text>
            <br />

            <Typography.Text>
              Department of Computer Engineering
            </Typography.Text>
          </Card>
        </Col>
        <Col span={4} />
      </Row>
    </div>
  );
};

export default MessageFromHod;
