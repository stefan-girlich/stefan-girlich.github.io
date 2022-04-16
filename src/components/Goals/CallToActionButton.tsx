import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import data from '../../config/data.json'

const IconContainer = styled.div`
  width: 0;
  overflow: hidden;
  opacity: 0;
  text-align: left;
  transform: translateX(-10px);
  transition: width 0.1s ease-in-out, opacity 0.05s ease-in-out 0.05s, transform 0.1s ease-in-out;
`

const Root = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(2)};
  font-family: inherit;
  border: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;

  * {
    cursor: pointer;
  }

  &:hover ${IconContainer} {
    width: 32px;
    opacity: 1;
    transform: translateX(0);
  }
`

const Label = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-family: inherit;
  font-weight: 600;
  /* margin-left: ${({ theme }) => theme.spacing(2)}; */
`

interface Props {
  onClick(): void
}

const CallToActionButton = ({ onClick }: Props) => {
  return (
    <Root>
      <IconContainer>
        <FontAwesomeIcon className="fa-2x" icon={solid('arrow-right')} />
      </IconContainer>
      <Label>{data.goals_button_label}</Label>
    </Root>
  )
}

export default CallToActionButton
