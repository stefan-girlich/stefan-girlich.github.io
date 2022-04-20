import styled from 'styled-components/macro'

const DOT_SIZE = 2

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing(DOT_SIZE)};
  margin-right: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.media('mobile')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.palette.tertiary.main};
`

const VerticalLineTop = styled.div`
  width: 0;
  height: 19.5px;
  border-left: 1px dashed ${({ theme }) => theme.palette.quartary.main};
`

const VerticalLineBottom = styled(VerticalLineTop)`
  height: auto;
  flex: 1;
`

interface Props {
  isMostRecent?: boolean
  isOldest?: boolean
}

const CareerHistoryTimelineSegment = ({ isMostRecent, isOldest }: Props) => {
  return (
    <Root>
      <VerticalLineTop style={isMostRecent ? { opacity: 0 } : undefined} />
      <Dot />
      <VerticalLineBottom style={isOldest ? { opacity: 0 } : undefined} />
    </Root>
  )
}

export default CareerHistoryTimelineSegment
