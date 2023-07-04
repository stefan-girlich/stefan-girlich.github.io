import styled from 'styled-components/macro'
import SkillSubsectionData from '../../entity/SkillSubsectionData'
import { SectionTitle } from '../Header/Heading'
import Page from '../Page/Page'
import Revealable from '../Revealable/Revealable'
import SkillsLegendButton from '../SkillsLegendButton/SkillsLegendButton'
import SkillsSubsection from './SkillsSubsection'

const Root = styled(Page)`
  width: 200%;
  transform: translateX(-25%);

  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.media('mobile')} {
    flex-direction: column;
  }
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.spacing(12)};

  ${({ theme }) => theme.media('tablet')} {
    margin: 0 ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.media('mobile')} {
    margin: 0;
  }

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
      <Revealable>
        <SectionTitle>
          {title}
          <SkillsLegendButton onClick={onLegendButtonClick} />
        </SectionTitle>
      </Revealable>
      <Content>
        <Column>
          {subsectionsByCol[0].map(({ title, items }, index) => (
            <Revealable key={index}>
              <SkillsSubsection title={title} skills={items} />
            </Revealable>
          ))}
        </Column>
        <Column>
          {subsectionsByCol[1].map(({ title, items }, index) => (
            <Revealable key={index}>
              <SkillsSubsection title={title} skills={items} />
            </Revealable>
          ))}
        </Column>
      </Content>
    </Root>
  )
}

export default Skills
