import { Col, Row, Select, Table, Typography, TableProps } from 'antd'
import React, { useEffect } from 'react'

import {
  bTechSems,
  beYear,
  courseName,
  mTechSems,
} from '../../data/courseStructure'

interface IProps {}

type semType = typeof bTechSems | typeof mTechSems | typeof beYear

const CourseStructure: React.FC<IProps> = () => {
  const [inputCourse, setInputCourse] =
    React.useState<typeof courseName[number]>('B. Tech')
  const [semData, setSemData] = React.useState<semType>(bTechSems)
  const [sem, setSem] = React.useState<semType[number]>('Semester 1')

  useEffect(() => {
    switch (inputCourse) {
      case 'B. Tech':
        setSemData(bTechSems)
        setSem('Semester 1')
        break
      case 'M. Tech':
        setSemData(mTechSems)
        setSem('Semester 1')
        break
      case 'B.E.':
        setSemData(beYear)
        setSem('Year 1')
        break
    }
  }, [inputCourse])

  return (
    <div>
      <Row style={{ background: '#e2e2e2' }} className="rounded-md py-8 px-20">
        <Col span={11}>
          <Typography.Title level={5}>Select Course</Typography.Title>
          <Select
            value={inputCourse}
            onChange={setInputCourse}
            className="w-full"
          >
            {courseName.map((cn) => (
              <Select.Option key={cn}>{cn}</Select.Option>
            ))}
          </Select>
        </Col>
        <Col span={2} />
        <Col span={11}>
          <Typography.Title level={5}>Select Semester/Year</Typography.Title>
          <Select value={sem} onChange={setSem} className="w-full">
            {semData.map((cn) => (
              <Select.Option key={cn}>{cn}</Select.Option>
            ))}
          </Select>
        </Col>
      </Row>

      <Row style={{ background: '#e2e2e2' }} className="rounded-md py-8  mt-8">
        <Col span={24}>
          <Typography.Title
            level={3}
            className="px-6"
          >{`${inputCourse} ${sem} details`}</Typography.Title>
        </Col>
      </Row>
    </div>
  )
}

export default CourseStructure
