import styled from 'styled-components/macro'

export const SIZE = 5

const Root = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  margin-left: 3px;
  background: ${({ theme }) => theme.palette.background.dark};
  transition: background-color 0.5s ease-out;

  &.learning {
    background: ${({ theme }) => theme.palette.tertiary.main};
  }

  &.filled {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`

interface Props {
  filled: boolean
  learning: boolean
}

const SkillScoreIndicator = ({ filled, learning }: Props) => {
  const className = filled ? (learning ? 'learning' : 'filled') : undefined
  return <Root className={className} />
}

export default SkillScoreIndicator
