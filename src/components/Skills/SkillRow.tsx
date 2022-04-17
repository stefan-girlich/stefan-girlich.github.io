import styled from 'styled-components/macro'
import SkillData from '../../entity/SkillData'
import SkillScore from '../SkillScore/SkillScore'
import { SIZE as INDICATOR_HEIGHT } from '../SkillScore/SkillScoreIndicator'

const LINE_HEIGHT = 1.33

const Root = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`

const SkillName = styled.span`
  margin-right: ${({ theme }) => theme.spacing(1.5)};
  font-size: ${({ theme }) => theme.fontSize('paragraph')};
  line-height: ${LINE_HEIGHT};
`

const VerticallyAlignedSkillScore = styled(SkillScore)`
  margin-top: ${({ theme }) => (theme.fontSizeRaw('paragraph') * LINE_HEIGHT - INDICATOR_HEIGHT) / 2}px;
`

interface Props {
  data: SkillData
}

const SkillRow = ({ data }: Props) => {
  return (
    <Root>
      <SkillName>{data.name}</SkillName>
      <VerticallyAlignedSkillScore value={data.score} />
    </Root>
  )
}

export default SkillRow
