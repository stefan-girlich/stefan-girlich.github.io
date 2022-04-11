import { useState } from 'react'
import styled from 'styled-components/macro'
import { H4 } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CareerHistoryTimelineSegment from './CareerHistoryTimelineSegment'
import ExpandCollapseIndicator from './ExpandCollapseIndicator'

const Root = styled.li`
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  flex: 1;
`

const Details = styled.div`
  max-height: 500px; // TODO a hack to avoid measuring content height - should be replaced when content is taller
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  overflow: hidden;
  opacity: 1;
`

const TitleRow = styled(H4)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;

  *  {
    cursor: pointer;
  }
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

const formatTimespan = (startYear: number, endYear: number | null) => {
  if (endYear === null) return `${startYear} –`
  if (startYear === endYear) return `${startYear}`
  return `${startYear} – ${endYear}`
}

export interface CareerHistoryItem {
  organization: string | null
  role: string
  start_year: number
  end_year: number | null
  text: string
  activities: string[]
}

interface Props {
  data: CareerHistoryItem
  index: number
  totalItemCount: number
}

const CareerHistoryListItem = ({ data, index, totalItemCount }: Props) => {
  const [isExpanded, setExpanded] = useState(false)
  const toggle = () => setExpanded(!isExpanded)
  const hasDetailContent = !!data.text.length || !!data.activities.length

  return (
    <Root>
      <CareerHistoryTimelineSegment isMostRecent={index === 0} isOldest={index === totalItemCount - 1} />

      <Content>
        <TitleRow onClick={toggle}>
          <TitleRowLefthandItems>
            <Role>{data.role}</Role>
            {data.organization && <Organization>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{data.organization}</Organization>}
            {hasDetailContent && <ExpandCollapseIndicator expanded={isExpanded} />}
          </TitleRowLefthandItems>

          <Timespan>{formatTimespan(data.start_year, data.end_year)}</Timespan>
        </TitleRow>

        {hasDetailContent && (
          <Details style={isExpanded ? undefined : { maxHeight: 0, opacity: 0 }}>
            <Paragraph>{data.text}</Paragraph>

            {!!data.activities.length && (
              <ActivityList>
                {data.activities.map((activity, activityIndex) => (
                  <ActivityListItem as="li" key={`${index}_${activityIndex}`}>
                    {activity}
                  </ActivityListItem>
                ))}
              </ActivityList>
            )}
          </Details>
        )}
      </Content>
    </Root>
  )
}

export default CareerHistoryListItem
