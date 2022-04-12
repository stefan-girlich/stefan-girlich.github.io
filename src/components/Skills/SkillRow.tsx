import styled from 'styled-components/macro'
import SkillData from '../../entity/SkillData'
import SkillScore from '../SkillScore/SkillScore'

const Root = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`

const SkillName = styled.span``

interface Props {
  data: SkillData
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
