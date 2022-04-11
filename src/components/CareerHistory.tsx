import styled from 'styled-components'
import { H3, H4 } from './Heading'
import Paragraph from './Paragraph'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

const Item = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Row = styled(H4)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Role = styled.span`
  /* display: inline-block; */
`
const Organization = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 300;
`

const Timespan = styled.div`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 300;
`

const Activity = styled(Paragraph)`
  margin-block-end: ${({ theme }) => theme.spacing(1)};
`

export interface CareerHistoryItem {
  organization: string
  role: string
  start_year: number
  end_year: number
  text: string
  activities: string[]
  tech_tags: string[]
  softskill_tags: string[]
}

interface Props {
  title: string
  items: CareerHistoryItem[]
}

const CareerHistory = ({ title, items }: Props) => {
  return (
    <Root>
      <H3>{title}</H3>
      {items.map((item, index) => (
        <Item key={index}>
          <Row>
            <div>
              <Role>{item.role}</Role>
              <Organization>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{item.organization}</Organization>
            </div>

            <Timespan>
              {item.start_year} - {item.end_year}
            </Timespan>
          </Row>

          <Paragraph>{item.text}</Paragraph>

          <ul>
            {item.activities.map((activity, activityIndex) => (
              <Activity as="li" key={`${index}_${activityIndex}`}>
                {activity}
              </Activity>
            ))}
          </ul>
        </Item>
      ))}
    </Root>
  )
}

export default CareerHistory
