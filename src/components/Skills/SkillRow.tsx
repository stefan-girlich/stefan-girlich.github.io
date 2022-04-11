import styled from 'styled-components/macro'
import SkillScore from './SkillScore'

const Root = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`

const SkillName = styled.span``

export interface Skill {
  name: string
  score: number
}

interface Props {
  data: Skill
}

const SkillRow = ({ data }: Props) => {
  return (
    <Root>
      <SkillName>{data.name}</SkillName>
      <SkillScore value={data.score} />
    </Root>
  )
}

export default SkillRow
