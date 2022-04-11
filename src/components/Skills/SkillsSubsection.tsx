import styled from 'styled-components/macro'
import { SubsectionTitle } from '../Header/Heading'
import SkillRow, { Skill } from './SkillRow'

const Root = styled.div``

const SkillsSubsectionTitle = styled(SubsectionTitle)`
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const SkillsList = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

interface Props {
  title: string
  skills: Skill[]
}

const SkillsSubsection = ({ title, skills }: Props) => {
  return (
    <Root>
      <SkillsSubsectionTitle>{title}</SkillsSubsectionTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillRow data={skill} key={index} />
        ))}
      </SkillsList>
    </Root>
  )
}

export default SkillsSubsection
