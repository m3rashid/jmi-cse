import { Card, Col, Image, Row, Typography } from 'antd';
import React, { useState } from 'react';

interface IProps {}

const facilities = [
  {
    name: 'Computer Lab I',
    image: '/images/favicon.jpg',
    description:
      'The Apple Lab has 60 computers based on dual boot Mac OS and Windows equipped with Intel Core I5- 2400S CPU @ 2.50GHz, RAM: 4GB, HDD: 500GB, Mac OS 10.6.7, installed with softwares: DevC++, Codeblocks, JDK, MySQL 5.0, Adobe Reader. \nThis lab provides excellent facility for conducting Data Structure, DBMS, Operating System labs.',
  },
  {
    name: 'Computer Lab II',
    image: '/images/favicon.jpg',
    description:
      'Programming Lab is well equipped with 40 Intel Core I5 -4590 CPU @3.3GHz *4 RAM: 4GB, HDD: 500GB, OS: Window, Ubuntu 16.10, Softwares: TurboC++, Codeblocks, DevC++, Intellij, LibreOffice, Jdk, Python 3.6(Anaconda 3), Sublime, Vim Editor . This lab is speacially dedicated for conducting C Programming, Compiler, Computer Network Lab.',
  },
  {
    name: 'Research Lab',
    image: '/images/favicon.jpg',
    description: '',
  },
  {
    name: 'Hardware Lab',
    image: '/images/favicon.jpg',
    description:
      'The Hardware Lab consists of number of digital logic trainers which uses various integrated circuits of various gates for hardware implementation. This lab gives knowledge of electronics and communication.',
  },
  {
    name: 'Advance Computing Lab',
    image: '/images/favicon.jpg',
    description:
      'The Advance Computing Lab consists of Intel CoreTM I3 -6100 CPU @3.70 GHz RAM: 4GB HDD: 500 GB OS : Windows 10 Software: Dev C++, Glassfish Server Open source, JDK, Jetbeans Pycharm, Netbeans 8.1, Python 3.6.0 ( Anaconda 3), TC++',
  },
  {
    name: 'Embedded IOT & Wireless Sensor Lab',
    image: '/images/favicon.jpg',
    description:
      'The Embedded IOT & Wireless Sensor Lab consists of CUDA OPEN CL, IOT equipments, Wireless Sensor equipments',
  },
  {
    name: 'Library',
    image: '/images/favicon.jpg',
    description:
      "Library in today's time is an essential part of an educational institute. At the library of Faculty of Engineering and technology, the students and staff have access to a variety of resources related to academics and research. Large number of books are available in library on almost every section of engineering. Apart from books, \nlibrary also provides facility of accessing internet resources through computers in a separate section. Students get issued book of their interest for a specified time period. Library provides a range of learning opportunities for both large and small groups as well as individuals with a focus on intellectual content, information literacy, and the learner. Library serves as a learning space for students to do independent work, use computers, research materials for increasing their knowledge.",
  },
  {
    name: 'Canteen',
    image: '/images/favicon.jpg',
    description:
      'The canteen of Faculty of Engineering and Technology is a two storey building which is well ventilated with adequate lighting facility and an open air environment . Canteen serves a variety of food prepared in hygienic conditions. \nThe food is of excellent quality and at very affordable rates. The college canteen plays an important role in this regard by catering the daily nutritional requirements of students and staff members as well. Canteen builds up an ambience of rendezvous where students have food and spend time with friends, keeping away all the hassles of mundane living. The food is served here for breakfast, lunch and evening, which includes snacks.',
  },
];

const Facilities: React.FC<IProps> = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Typography.Title className='text-center'>Facilities</Typography.Title>

      <div className='flex items-center justify-center'>
        <Row className='max-w-5xl'>
          <Col span={8}>
            {facilities.map((f, index) => (
              <div
                key={f.name}
                className='bg-white mb-2 mx-3 p-3 rounded-md cursor-pointer'
                onClick={() => setSelected(index)}
              >
                <Typography.Text className='font-bold'>
                  {f.name}
                </Typography.Text>
              </div>
            ))}
          </Col>
          <Col span={16}>
            <Card
              title={facilities[selected].name}
              cover={
                <Image
                  src={facilities[selected].image}
                  alt={facilities[selected].name}
                  preview={false}
                />
              }
            >
              {facilities[selected].description}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Facilities;
