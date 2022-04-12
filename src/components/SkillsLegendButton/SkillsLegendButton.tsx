import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'

const Root = styled.a`
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.quartary.main};
  background-color: transparent;
  color: ${({ theme }) => theme.palette.quartary.main};
  width: 19px;
  height: 19px;
  text-align: center;
  border-radius: 100%;
  margin-left: ${({ theme }) => theme.spacing(1.5)};
  transition: background-color 0.07s ease-in-out, color 0.05s ease-in-out;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  svg {
    font-size: 0.45em;
    vertical-align: 0.55em;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`

interface Props {
  onClick(): void
}

const SkillsLegendButton = ({ onClick }: Props) => (
  <Root onClick={onClick}>
    <FontAwesomeIcon icon={solid('question')} />
  </Root>
)

export default SkillsLegendButton
