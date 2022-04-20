import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'

const Root = styled.div`
  display: inline;
  color: ${({ theme }) => theme.palette.primary.main};
  border: 0;
  background: transparent;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize('sm')};
  margin-left: ${({ theme }) => theme.spacing(2)};
`

const AnimationContainer = styled.div`
  transition: transform 0.2s ease-out;
  transform: rotate(0deg);
`

interface Props {
  expanded: boolean
  className?: string
}

const ExpandCollapseIndicator = ({ expanded, className }: Props) => {
  return (
    <Root className={className}>
      <AnimationContainer style={expanded ? { transform: 'rotate(90deg)' } : undefined}>
        <FontAwesomeIcon icon={solid('angle-right')} />
      </AnimationContainer>
    </Root>
  )
}

export default ExpandCollapseIndicator
