import styled from 'styled-components/macro'
import SkillSubsectionData from '../../entity/SkillSubsectionData'
import { SectionTitle } from '../Header/Heading'
import SkillsLegendButton from '../SkillsLegendButton/SkillsLegendButton'
import SkillsSubsection from './SkillsSubsection'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.spacing(5)};
  margin: 0 ${({ theme }) => theme.spacing(7)};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const splitSubsectionsByColumn = <T extends { column: number }>(items: T[]) => {
  return items.reduce(
    (acc, item) => {
      const col = item.column <= 1 ? item.column : 1
      acc[col].push(item)
      return acc
    },
    [[], []] as [T[], T[]]
  )
}

interface Props {
  title: string
  subsections: SkillSubsectionData[]
  onLegendButtonClick(): void
}

const Skills = ({ title, subsections, onLegendButtonClick }: Props) => {
  const subsectionsByCol = splitSubsectionsByColumn(subsections)

  return (
    <Root>
      <SectionTitle>
        {title}
        <SkillsLegendButton onClick={onLegendButtonClick} />
      </SectionTitle>
      <Content>
        <Col>
          {subsectionsByCol[0].map(({ title, items }, index) => (
            <SkillsSubsection title={title} skills={items} key={index} />
          ))}
        </Col>
        <Col>
          {subsectionsByCol[1].map(({ title, items }, index) => (
            <SkillsSubsection title={title} skills={items} key={index} />
          ))}
        </Col>
      </Content>
    </Root>
  )
}

export default Skills
