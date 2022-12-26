import { StarFilled } from '@ant-design/icons';
import { Steps, Typography } from 'antd';
import React from 'react';

interface IProps {}

const steps = [
  {
    title: 'Foundation Stone Laid',
    icon: <StarFilled />,
    description:
      'The foundation stone of the prestigious institution was laid by Shaikhul Hind Maulana Mahmud Hasan, Maulana Mohammad Ali Jauhar, Hakim Ajmal Khan, Dr. Zakir Khan, Dr. Mukhtar Ahmad Ansari, Abdul Majeed Khwaja, and many other enthusiastic personalities.',
  },
  {
    title: 'Established in 1920',
    icon: <StarFilled />,
    description:
      "Jamia Millia Islamia, established in the year 1920, is an institution originally established by a group of Muslim nationalists and intellectuals at Aligarh, Uttar Pradesh during the Khilafat and Non-Cooperate movement in response to Mahatma Gandhi's step to boycott government-supported education system",
  },
  {
    title: 'Campus Shifted in 1925',
    icon: <StarFilled />,
    description:
      'In the year 1925, its campus shifted from Aligarh to Delhi. Since then, it has been continuously growing, always renewing its methods and preparing itself from time to time to meet new needs. Loyal to its ideals, it has over the years, tried to enhance the physical and mental development of students, and has become a premier educational institute of the country.',
  },
  {
    title: 'Declared Deemed University in 1962',
    icon: <StarFilled />,
    description:
      'Jamia Millia Islamia was declared a Deemed University under Section 2 of the University Grants Commission(UGC) Act in 1962',
  },
  {
    title: 'New Faculties',
    icon: <StarFilled />,
    description:
      'In 1981, the faculties of Humanities and Languages, Natural Sciences, Social Science, and the State Resource Centre were founded. \nIn 1983, it started the Mass Communication Research Centre and the Centre for Coaching and Career Planning. \nIn 1985, it established the Faculty of Engineering & Technology and the University Computer Centre. Academic Staff College and the Academy of Third World Studies followed in 1987 and 1988. By a Special Act of the Parliament, \nIn the list of the Faculties, i.e. Education, Humanities & Languages, Natural Sciences, Social Sciences. Engineering & Technology, one more Faculty - Faculty of Law, was added in 1989. \nMany new courses and programmes at UG and PG levels have since been added.',
  },
  {
    title: 'Became Central University in 1988',
    icon: <StarFilled />,
    description:
      'Jamia Millia Islamia became a Central University in the year 1988 by an act of the Indian Parliament which was passed on December 26, 1988',
  },
  {
    title: 'Other Faculties',
    icon: <StarFilled />,
    description:
      'Besides its nine faculties, Jamia has a number of centers of learning and research, like AJK-Mass Communication Research Centre (MCRC), Academy of International Studies, etc. Jamia is also marching ahead in the field of Information Technology (IT). It offers various undergraduate and postgraduate IT courses. Apart from this, the Jamia has a campus-wide network which connects a large number of its departments and offices.',
  },
  {
    title: 'Jamia Now',
    icon: <StarFilled />,
    description:
      'The story of its growth from a small institution in the pre-independence India to a central university located in New Delhi—offering integrated education from nursery to research in specialized areas—is a saga of dedication, conviction, and vision of a people who worked against all odds and nurtured it growth step by step.',
  },
];

const AboutJamia: React.FC<IProps> = () => {
  return (
    <div>
      <Typography.Title>JAMIA MILLIA ISLAMIA</Typography.Title>
      <Steps direction='vertical' items={steps} current={8} />
    </div>
  );
};

export default AboutJamia;
