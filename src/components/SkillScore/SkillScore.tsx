import { useRef } from 'react'
import styled from 'styled-components/macro'
import useOnScreen from '../../hooks/useOnScreen'
import SkillScoreIndicator from './SkillScoreIndicator'

const MAX_SKILL_SCORE = 5

const Root = styled.div`
  display: flex;
  flex-direction: row;

  &.unrevealed > * {
    background: ${({ theme }) => theme.palette.background.dark};
  }

  & > *:nth-child(1) {
    transition-delay: 0s;
  }
  & > *:nth-child(2) {
    transition-delay: 0.048s;
  }
  & > *:nth-child(3) {
    transition-delay: 0.081s;
  }
  & > *:nth-child(4) {
    transition-delay: 0.144s;
  }
  & > *:nth-child(5) {
    transition-delay: 0.225s;
  }
`

interface Props {
  value: number
  className?: string
}

const SkillScore = ({ value, className }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { wasOnScreenClassName } = useOnScreen(ref)

  const isLearning = value <= 2
  return (
    <Root ref={ref} className={`${className} ${wasOnScreenClassName}`}>
      {[...Array(MAX_SKILL_SCORE)].map((_, i) => (
        <SkillScoreIndicator filled={i + 1 <= value} learning={isLearning} key={i} />
      ))}
    </Root>
  )
}

export default SkillScore
