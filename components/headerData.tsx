import { NextRouter, useRouter } from 'next/router';
import {
  BookOutlined,
  StarOutlined,
  MessageOutlined,
  FacebookOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import { FC } from 'react';
import type { ItemType } from 'antd/es/menu/hooks/useItems';

type HeaderDropdownDataProp = (ItemType & { link: string })[];

export const aboutUs: HeaderDropdownDataProp = [
  {
    label: 'About Jamia',
    key: 'about_jamia',
    icon: <BookOutlined />,
    link: '/about-us/about-jamia',
  },
  {
    label: 'About Department',
    key: 'about_dept',
    icon: <BookOutlined />,
    link: '/about-us/about-department',
  },
  {
    label: 'Vision and Mission',
    key: 'vission_mission',
    icon: <StarOutlined />,
    link: '/about-us/vision-mission',
  },
  {
    label: 'Message from HOD',
    key: 'message_from_hod',
    icon: <MessageOutlined />,
    link: '/about-us/message-from-hod',
  },
  {
    label: 'Achievements',
    key: 'achievements',
    icon: <StarOutlined />,
    link: '/about-us/achievements',
  },
  {
    label: 'Facilities',
    key: 'facilities',
    icon: <FacebookOutlined />,
    link: '/about-us/facilities',
  },
  {
    label: 'Testimonials',
    key: 'testimonials',
    icon: <StarOutlined />,
    link: '/about-us/testimonials',
  },
  {
    label: 'Events',
    key: 'events',
    icon: <StarOutlined />,
    link: '/about-us/events',
  },
  {
    label: 'Development Team',
    key: 'dev_team',
    icon: <StarOutlined />,
    link: '/about-us/dev-team',
  },
];

export const academic: HeaderDropdownDataProp = [
  {
    label: 'Courses Offered',
    key: 'courses_offered',
    icon: <StarOutlined />,
    link: '/academic/courses-offered',
  },
  {
    label: 'Course Structure',
    key: 'course_structure',
    icon: <StarOutlined />,
    link: '/academic/course-structure',
  },
  {
    label: 'Notices',
    key: 'notices',
    icon: <StarOutlined />,
    link: '/academic/notices',
  },
  {
    label: 'Faculty Members',
    key: 'faculty_members',
    icon: <StarOutlined />,
    link: '/academic/faculty-members',
  },
  {
    label: 'PHD Scholars',
    key: 'phd_scholars',
    icon: <StarOutlined />,
    link: '/academic/phd-scholars',
  },
  {
    label: 'Students',
    key: 'students',
    icon: <StarOutlined />,
    link: '/academic/students',
  },
  {
    label: 'Staff Members',
    key: 'staff_members',
    icon: <StarOutlined />,
    link: '/academic/staff-members',
  },
];

export const research: HeaderDropdownDataProp = [
  {
    label: 'Research Area',
    key: 'research_area',
    icon: <StarOutlined />,
    link: '/research/research-area',
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <StarOutlined />,
    link: '/research/projects',
  },
  {
    label: 'Publications',
    key: 'publications',
    icon: <StarOutlined />,
    link: '/research/publications',
  },
];

export const adminLogin: HeaderDropdownDataProp = [
  {
    label: 'Students',
    key: 'students',
    icon: <StarOutlined />,
    link: '/admin/students',
  },
  {
    label: 'Achievements',
    key: 'achievements',
    icon: <StarOutlined />,
    link: '/admin/achievements',
  },
  {
    label: 'Events',
    key: 'events',
    icon: <StarOutlined />,
    link: '/admin/events',
  },
  {
    label: 'Company',
    key: 'company',
    icon: <StarOutlined />,
    link: '/admin/company',
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <StarOutlined />,
    link: '/admin/projects',
  },
  {
    label: 'Research',
    key: 'research',
    icon: <StarOutlined />,
    link: '/admin/research',
  },
];

interface IProps {
  buttonLabel: string;
  data: HeaderDropdownDataProp;
}

export const HeaderDropDown: FC<IProps> = ({ data, buttonLabel }) => {
  const router = useRouter();

  const handleClick = (props: any) => {
    const item = data?.find((d) => d?.key === props.key);
    if (router.asPath === item?.link) return;
    router.push(item?.link || '/', undefined, { shallow: true });
  };

  return (
    <Dropdown menu={{ items: data, onClick: handleClick }}>
      <Button className='border-0 flex items-center'>
        {buttonLabel}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
