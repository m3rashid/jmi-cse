import { StarFilled } from '@ant-design/icons';
import { Steps, Typography } from 'antd';
import React from 'react';

interface IProps {}

const steps = [
  {
    title: 'Started in 2000',
    icon: <StarFilled />,
    description:
      'The Department of Computer Engineering was started in the year 2000. Since its inception, the department has kept on evolving and now has become one of the leading departments at the Faculty of Engineering and Technology.',
  },
  {
    title: 'UG Courses',
    icon: <StarFilled />,
    description:
      'Two undergraduate courses are running at the department, namely B.Tech in Computer Engineering and B.E. in Computer Engineering, B.',
  },
  {
    title: 'Academics',
    icon: <StarFilled />,
    description:
      'Tech Computer Engineering is fully equipped with the subjects that are currently the need of the industry, with the aim to make the students market ready. Department of Computer Engineering also runs Masters program that has thrust on research in AI, NLP, Soft computing and Computer Networks. We have also been approached by leading companies like Adobe, Google, Microsoft for placements.',
  },
  {
    title: 'Market Trends',
    icon: <StarFilled />,
    description:
      'Keeping the current market trends in mind, the department of Computer Engineering has also started courses. The Department also runs the Ph.D. program, under which a number of research scholars are working in the fields of Networking, Data Mining, and Artificial Intelligence etc',
  },
  {
    title: 'Research and Publications',
    icon: <StarFilled />,
    description:
      'The Faculty members at the department have produced quite a large number of research papers in various reputed National and International Journals and Conferences. The faculty members have also authored a number of books in the field of Computer Engineering and are actively involved in taking the department to greater heights.',
  },
  {
    title: 'Workshops',
    icon: <StarFilled />,
    description:
      'Apart from the curriculum, the department has actively organized lectures for its students on various technical as well as non-technical topics, which are delivered by professionals from the industry.',
  },
  {
    title: 'Placements',
    icon: <StarFilled />,
    description:
      'The Department has been working towards placements of its students very diligently. We were fortunate enough to get an accreditation from TCS. With the visit from other companies, most of the students of the department have been placed. Companies like TCS, HCL, HP, Adobe, Arricent, Accenture, BirlaSoft, NewGen etc. have visited the department for campus selection in the recent years.',
  },
  {
    title: '',
    icon: <StarFilled />,
    description:
      "The Department of Computer Engineering is also an institutional member of the Computer Society of India, and has an active student's chapter which successfully conducts an annual cultural cum technical fest and various other events throughout the year. We also have a Linux user group here at the department which is also actively making efforts to improve the student's skills in Linux.",
  },
];

const AboutDepartment: React.FC<IProps> = () => {
  return (
    <div>
      <Typography.Title>DEPARTMENT OF COMPUTER ENGINEERING</Typography.Title>

      <Steps direction='vertical' items={steps} current={8} />
    </div>
  );
};

export default AboutDepartment;
