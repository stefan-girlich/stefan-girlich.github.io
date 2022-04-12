import styled, { useTheme } from 'styled-components/macro'

const SIZE = 5

const Root = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.background.dark};
  /* border-radius: ${SIZE}px; */
  margin-left: 3px;
  background: ${({ theme }) => theme.palette.background.dark};
`

interface Props {
  filled: boolean
  learning: boolean
}

const SkillScoreIndicator = ({ filled, learning }: Props) => {
  const { palette } = useTheme()
  const color = filled ? (learning ? palette.tertiary.main : palette.primary.main) : undefined
  return <Root style={{ borderColor: color, background: color }} />
}

export default SkillScoreIndicator
