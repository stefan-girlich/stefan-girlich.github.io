import styled from 'styled-components/macro'
import SkillScoreIndicator from './SkillScoreIndicator'

const MAX_SKILL_SCORE = 5

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

interface Props {
  value: number
}

const SkillScore = ({ value }: Props) => {
  const isLearning = value <= 2
  return (
    <Root>
      {[...Array(MAX_SKILL_SCORE)].map((_, i) => (
        <SkillScoreIndicator filled={i + 1 <= value} learning={isLearning} key={i} />
      ))}
    </Root>
  )
}

export default SkillScore
