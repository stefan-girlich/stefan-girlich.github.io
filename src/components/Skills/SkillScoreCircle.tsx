import styled, { useTheme } from 'styled-components/macro'

const ITEM_SIZE = 5

const Root = styled.div`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.background.dark};
  /* border-radius: ${ITEM_SIZE}px; */
  margin-left: 3px;
  background: ${({ theme }) => theme.palette.background.dark};
`

interface Props {
  filled: boolean
  learning: boolean
}

const SkillScoreCircle = ({ filled, learning }: Props) => {
  const { palette } = useTheme()
  const color = filled ? (learning ? palette.tertiary.main : palette.primary.main) : undefined
  return <Root style={{ borderColor: color, background: color }} />
}

export default SkillScoreCircle
