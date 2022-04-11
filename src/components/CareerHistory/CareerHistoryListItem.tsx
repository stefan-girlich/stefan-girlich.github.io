import { useState } from 'react'
import styled from 'styled-components'
import { H4 } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CareerHistoryTimelineSegment from './CareerHistoryTimelineSegment'

import texts from '../../config/texts.json'

const Root = styled.li`
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  flex: 1;
`

const Details = styled.div`
  max-height: 500px; // TODO a hack to avoid measuring content height - should be replaced when content is taller
  transition: max-height 0.5s ease-out;
  overflow: hidden;
`

const TitleRow = styled(H4)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const TitleRowLefthandItems = styled.div`
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

const ExpandCollapseButton = styled.button`
  color: ${({ theme }) => theme.palette.primary.main};
  border: 0;
  background: transparent;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-left: ${({ theme }) => theme.spacing(1)};
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
  data: CareerHistoryItem
  index: number
}

const CareerHistoryListItem = ({ data, index }: Props) => {
  const [isExpanded, setExpanded] = useState(false)
  const toggle = () => setExpanded(!isExpanded)

  return (
    <Root>
      <CareerHistoryTimelineSegment isMostRecent={index === 0} />

      <Content>
        <TitleRow>
          <TitleRowLefthandItems>
            <Role>{data.role}</Role>
            <Organization>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{data.organization}</Organization>
            <ExpandCollapseButton onClick={toggle}>
              {isExpanded ? texts.show_less : texts.show_more}
            </ExpandCollapseButton>
          </TitleRowLefthandItems>

          <Timespan>
            {data.start_year} - {data.end_year}
          </Timespan>
        </TitleRow>

        <Details style={isExpanded ? undefined : { maxHeight: 0 }}>
          <Paragraph>{data.text}</Paragraph>

          <ActivityList>
            {data.activities.map((activity, activityIndex) => (
              <ActivityListItem as="li" key={`${index}_${activityIndex}`}>
                {activity}
              </ActivityListItem>
            ))}
          </ActivityList>
        </Details>
      </Content>
    </Root>
  )
}

export default CareerHistoryListItem
