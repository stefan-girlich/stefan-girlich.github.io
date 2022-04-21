import { useRef } from 'react'
import styled from 'styled-components/macro'
import useOnScreen from '../../hooks/useOnScreen'

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
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;

  &.unrevealed {
    transform: scale(0.2);
  }
`

const VerticalLineTop = styled.div`
  width: 0;
  height: 19.5px;
  border-left: 1px dashed ${({ theme }) => theme.palette.quartary.main};

  ${({ theme }) => theme.media('tablet')} {
    height: 15.2px;
  }
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
  const ref = useRef<HTMLDivElement | null>(null)
  const { wasOnScreenClassName } = useOnScreen(ref)
  return (
    <Root ref={ref}>
      <VerticalLineTop style={isMostRecent ? { opacity: 0 } : undefined} />
      <Dot className={wasOnScreenClassName} />
      <VerticalLineBottom style={isOldest ? { opacity: 0 } : undefined} />
    </Root>
  )
}

export default CareerHistoryTimelineSegment
