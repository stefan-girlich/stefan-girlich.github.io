import styled from 'styled-components/macro'
import SkillScoreCircle from './SkillScoreCircle'

const MAX_SKILL_SCORE = 5

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

interface Props {
  value: number
}

const SkillScore = ({ value }: Props) => {
  const isLearning = value <= 3
  return (
    <Root>
      {[...Array(MAX_SKILL_SCORE)].map((_, i) => (
        <SkillScoreCircle filled={i + 1 <= value} learning={isLearning} key={i} />
      ))}
    </Root>
  )
}

export default SkillScore
