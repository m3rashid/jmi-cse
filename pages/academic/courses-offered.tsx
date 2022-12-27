import React, { FC, useState } from 'react'
import { Card, Col, Row, Typography } from 'antd'

import {
  coursesList,
  beData,
  btechData,
  mtechData,
  phdData,
  IString,
} from '../../data/coursesOffered'

interface IProps {}

const data = [beData, btechData, mtechData, phdData]

const RenderIstring: FC<{ title: string; data: IString[] }> = ({
  title,
  data,
}) => {
  return (
    <Card.Meta
      title={title}
      description={
        <div className="mb-8">
          {data.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <Typography.Text>{el.text}</Typography.Text>
                <br />
              </React.Fragment>
            )
          })}
        </div>
      }
    />
  )
}

const RenderString: FC<{
  title: string
  description: string | number
}> = ({ title, description }) => {
  return (
    <Card.Meta
      {...{ title, description }}
      style={{
        marginBottom: '2rem',
        background: '#e2e2e2',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
      }}
    />
  )
}

const CoursesOffered: React.FC<IProps> = () => {
  const [selected, setSelected] = useState(coursesList[0].shortName)

  const currentData = data.find((d) => selected === d.shortName)

  return (
    <div>
      <Typography.Title>Courses Offered</Typography.Title>
      <Row>
        <Col span={8}>
          {coursesList.map((cl, index) => (
            <Card
              className="mb-2"
              key={cl.id}
              title={cl.title}
              onClick={() => setSelected(cl.shortName)}
            >
              <Typography.Text>{cl.body}</Typography.Text>
            </Card>
          ))}
        </Col>
        <Col span={16}>
          {currentData ? (
            <Card title={currentData.title} className="flex flex-col ml-2">
              <RenderIstring title="" data={currentData.intro} />

              <div className="flex gap-6">
                {currentData.intake && (
                  <RenderString
                    title="Intake"
                    description={currentData.intake}
                  />
                )}

                {currentData.courseFee && (
                  <RenderString
                    title="Course Fee"
                    description={currentData.courseFee}
                  />
                )}

                {currentData.fellowships && (
                  <RenderString
                    title="Fellowships"
                    description={currentData.fellowships}
                  />
                )}

                {currentData.duration && (
                  <RenderString
                    title="Duration"
                    description={currentData.duration}
                  />
                )}

                {currentData.type && (
                  <RenderString
                    title="Course Type"
                    description={currentData.type}
                  />
                )}
              </div>

              {currentData.eligibility && (
                <RenderIstring
                  title="Eligibility"
                  data={currentData.eligibility}
                />
              )}

              {currentData.admProcess && (
                <RenderIstring
                  title="Admission Process"
                  data={currentData.admProcess}
                />
              )}

              {currentData.careerProspects && (
                <RenderIstring
                  title="Career Prospects"
                  data={currentData.careerProspects}
                />
              )}

              {currentData.programEducationalObjectives && (
                <>
                  <Typography.Title level={4}>
                    Program Education Objectives
                  </Typography.Title>
                  {currentData.programEducationalObjectives.map((pE) => (
                    <RenderString
                      key={pE.id}
                      title={pE.title}
                      description={pE.body}
                    />
                  ))}
                </>
              )}

              {currentData.programSpecificOutcomes && (
                <>
                  <Typography.Title level={4}>
                    Program Specific Outcomes
                  </Typography.Title>
                  {currentData.programSpecificOutcomes.map((pE) => (
                    <RenderString
                      key={pE.id}
                      title={pE.title}
                      description={pE.body}
                    />
                  ))}
                </>
              )}
            </Card>
          ) : null}
        </Col>
      </Row>
    </div>
  )
}

export default CoursesOffered
