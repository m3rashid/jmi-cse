import React from 'react';
import { Card, Col, Image, Typography } from 'antd';
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GlobalOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const contri = [
  { icon: '💻', work: 'code' },
  { icon: '🔣', work: 'testing' },
  { icon: '🎨', work: 'design' },
  { icon: '🤔', work: 'ideas' },
  { icon: '📓', work: 'data' },
  { icon: '📆', work: 'management' },
  { icon: '🚧', work: 'maintenance' },
  { icon: '👀', work: 'reviews' },
  { icon: '🐛', work: 'bugs' },
] as const;

const allowedContri = contri.map((c) => c.icon);
type IContri = typeof allowedContri[number];

interface IDevTeam {
  id: string;
  name: string;
  photo: string;
  department: string;
  intro: string;
  batch: string;
  contri: IContri[];
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  portfolio?: string;
  phone?: string;
  email?: string;
}

const devTeam: IDevTeam[] = [
  {
    id: 'm3rashid',
    name: 'MD Rashid Hussain',
    photo: 'https://m3rashid.in/images/rashid.jpg',
    department: 'Computer Science',
    intro: 'A Full Stack Developer',
    batch: '2020 - 24',
    contri: ['💻', '🎨', '🤔', '🚧', '📆'],
    github: 'https://github.com/m3rashid',
    linkedin: 'https://www.linkedin.com/in/m3rashid/',
    twitter: 'https://twitter.com/m3_rashid',
    instagram: 'https://www.instagram.com/m3_rashid/',
    portfolio: 'https://m3rashid.in/',
    // phone: '+91 8002594916',
    email: 'm3rashid.hussain@gmail.com',
  },
];

const RenderLink = ({ link, icon }: { link?: string; icon: any }) => {
  if (!link || !link.trim().length) return null;
  return (
    <Link href={link} target='_blank'>
      {icon}
    </Link>
  );
};

interface IProps {}

const DevTeam: React.FC<IProps> = () => {
  return (
    <>
      <Typography.Title>Development Team</Typography.Title>
      {devTeam.map((d) => (
        <Col span={6} key={d.id}>
          <Card
            cover={<Image preview={false} src={d.photo} alt={d.name} />}
            actions={[
              <RenderLink
                key={`github ${d.id}`}
                link={d.github}
                icon={<GithubOutlined />}
              />,
              <RenderLink
                key={`linkedin ${d.id}`}
                link={d.linkedin}
                icon={<LinkedinOutlined />}
              />,
              <RenderLink
                key={`twitter ${d.id}`}
                link={d.twitter}
                icon={<TwitterOutlined />}
              />,
              <RenderLink
                key={`instagram ${d.id}`}
                link={d.instagram}
                icon={<InstagramOutlined />}
              />,
              <RenderLink
                key={`portfolio ${d.id}`}
                link={d.portfolio}
                icon={<GlobalOutlined />}
              />,
              <RenderLink
                key={`email ${d.id}`}
                link={`mailto:${d.email}`}
                icon={<MailOutlined />}
              />,
            ]}
          >
            <Card.Meta title={d.name} description={d.intro} />
          </Card>
        </Col>
      ))}
    </>
  );
};

export default DevTeam;
