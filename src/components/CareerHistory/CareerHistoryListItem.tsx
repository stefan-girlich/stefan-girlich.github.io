import { useState } from 'react'
import styled from 'styled-components/macro'
import { H4 } from '../Header/Heading'
import RichTextParagraph from '../Paragraph/Paragraph'
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
  max-height: 580px; // TODO a hack to avoid measuring content height - should be replaced when content is taller
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  overflow: hidden;
  opacity: 1;

  ${({ theme }) => theme.media('tablet')} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`

const TitleRow = styled(H4)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSize('md')};
  cursor: pointer;

  ${({ theme }) => theme.media('tablet')} {
    align-items: flex-start;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  *  {
    cursor: pointer;
  }
`

const TitleRowLefthandItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.media('tablet')} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Role = styled.span`
  line-height: 1.2;
`

const Organization = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 300;
  line-height: 1.1;

  ${({ theme }) => theme.media('tablet')} {
    margin-top: ${({ theme }) => theme.spacing(0.5)};
  }

  &::before {
    content: '\u00A0\u00A0\u2014\u00A0\u00A0';

    ${({ theme }) => theme.media('tablet')} {
      content: '';
    }
  }
`

const Timespan = styled.div`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize('sm')};
  line-height: ${({ theme }) => theme.fontSize('md')};
  white-space: nowrap;

  ${({ theme }) => theme.media('tablet')} {
    margin-top: 1px; // TODO generalize vertical alignment with left-hand text
  }
`

const BaseExpandCollapseIndicator = styled(ExpandCollapseIndicator)`
  display: none;
`

const DesktopExpandCollapseIndicator = styled(BaseExpandCollapseIndicator)`
  ${({ theme }) => theme.media('tablet', 'min')} {
    display: block;

    svg {
      margin-top: 1px;
    }
  }
`

const MobileExpandCollapseIndicator = styled(BaseExpandCollapseIndicator)`
  ${({ theme }) => theme.media('tablet')} {
    display: inline-block;
    margin-left: ${({ theme }) => theme.spacing(1)};

    svg {
      margin-bottom: 1px;
    }
  }
`

const NonBreakingSpan = styled.span`
  white-space: nowrap;
`

const ActivityList = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

const ActivityListItem = styled(RichTextParagraph)`
  margin-left: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  list-style-type: square;

  ${({ theme }) => theme.media('tablet')} {
    margin-left: ${({ theme }) => theme.spacing(3)};
  }

  &::marker {
    color: ${({ theme }) => theme.palette.tertiary.main};
  }
`

const formatTimespan = (startYear: number, endYear: number | null) => {
  if (endYear === null) return `${startYear} –`
  if (startYear === endYear) return `${startYear}`
  return `${startYear}\u00A0–\u00A0${endYear}`
}

/** We want to separate the last word in the "role" string so we can
 * wrap it into an element together with the mobile expand/collapse indicator
 * to prevent the latter from solely overflowing into a new line.
 */
const splitRoleWords = (roleString: string) => {
  const roleWords = roleString.split(/(\s+)/)
  const isRoleSingleWord = roleWords.length === 1
  const roleFirstWords = isRoleSingleWord ? [...roleWords] : roleWords.slice(0, -1)
  const roleLastWord = isRoleSingleWord ? null : roleWords.slice(-1)
  const roleFirstWordsString = roleFirstWords.join(' ')
  return [roleFirstWordsString, roleLastWord]
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

  const { role } = data
  const roleSegments = hasDetailContent ? splitRoleWords(role) : [role, null]

  return (
    <Root>
      <CareerHistoryTimelineSegment isMostRecent={index === 0} isOldest={index === totalItemCount - 1} />

      <Content>
        <TitleRow onClick={toggle}>
          <TitleRowLefthandItems>
            <Role>
              <span>{roleSegments[0]}</span>
              {!!roleSegments[1] && (
                <NonBreakingSpan>
                  {roleSegments[1]}
                  <MobileExpandCollapseIndicator expanded={isExpanded} />
                </NonBreakingSpan>
              )}
            </Role>
            {data.organization && <Organization>{data.organization}</Organization>}
            {hasDetailContent && <DesktopExpandCollapseIndicator expanded={isExpanded} />}
          </TitleRowLefthandItems>

          <Timespan>{formatTimespan(data.start_year, data.end_year)}</Timespan>
        </TitleRow>

        {hasDetailContent && (
          <Details style={isExpanded ? undefined : { maxHeight: 0, opacity: 0 }}>
            <RichTextParagraph>{data.text}</RichTextParagraph>

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
