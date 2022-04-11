import styled from 'styled-components'
import CareerHistoryItemIndicator from './CareerHistoryItemIndicator'
import { H3, H4 } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

const Title = styled(H3)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const CareerList = styled.ul`
  /* padding-bottom: ${({ theme }) => theme.spacing(1)}; */
  list-style: none;
`

const CareerListItem = styled.li`
  display: flex;
  flex-direction: row;
  /* padding-bottom: ${({ theme }) => theme.spacing(1)}; */
`

const CareerListItemContent = styled.div`
  flex: 1;
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const ActivityList = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

const ActivityListItem = styled(Paragraph)`
  margin-left: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  list-style-type: square;

  &::marker {
    color: ${({ theme }) => theme.palette.tertiary.main};
  }
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
      <Title>{title}</Title>
      <CareerList>
        {items.map((item, index) => (
          <CareerListItem key={index}>
            <CareerHistoryItemIndicator isMostRecent={index === 0} />

            <CareerListItemContent>
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

              <ActivityList>
                {item.activities.map((activity, activityIndex) => (
                  <ActivityListItem as="li" key={`${index}_${activityIndex}`}>
                    {activity}
                  </ActivityListItem>
                ))}
              </ActivityList>
            </CareerListItemContent>
          </CareerListItem>
        ))}
      </CareerList>
    </Root>
  )
}

export default CareerHistory
