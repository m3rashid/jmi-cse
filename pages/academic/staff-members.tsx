import { Table } from 'antd';
import React from 'react';

interface IProps {}

export const staffDetails = [
  {
    id: 'kadahm',
    name: 'Mr. Kadir Ahmad',
    desig: 'U.D.C.',
  },
  {
    id: 'iqhuss',
    name: 'Mr. Iqbal Hussain',
    desig: 'Technician',
  },
  {
    id: 'qamhod',
    name: 'Mr. Md Qamrul Hoda',
    desig: 'Multitasking Staff',
  },
  {
    id: 'syedimr',
    name: '	Mr. Syed Imran',
    desig: 'Multitasking Staff',
  },
  {
    id: 'mehahm',
    name: 'Mr. Mehfuz Ahmad',
    desig: 'Multitasking Staff',
  },
  {
    id: 'salahm',
    name: 'Mr. Saleem Ahmad',
    desig: 'Technical Assistant',
  },
  {
    id: 'salkhan',
    name: 'Mr. Saleem Khan',
    desig: 'Helper',
  },
  {
    id: 'gulhus',
    name: 'Mr. Gulam Husain',
    desig: 'Multitasking Staff',
  },
];

const columns = [
  {
    title: 'Sl.No.',
    render: (_: any, __: any, index: number) => index + 1,
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Designation',
    key: 'desig',
    dataIndex: 'desig',
  },
];

const StaffMembers: React.FC<IProps> = () => {
  return (
    <>
      <Table columns={columns} dataSource={staffDetails} />
    </>
  );
};

export default StaffMembers;
