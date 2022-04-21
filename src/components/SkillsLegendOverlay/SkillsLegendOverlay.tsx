import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SkillScore from '../SkillScore/SkillScore'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zLayers.overlay};
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.1s ease-out;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.background.dark};
  opacity: 0.95;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.15s ease-in-out;
  transform: translateY(-2%);
`

const Content = styled.div`
  min-width: 320px;
  max-width: 480px;
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.palette.background.main};
  color: ${({ theme }) => theme.palette.background.contrastText};

  ${({ theme }) => theme.media('tablet')} {
    max-width: 420px;
  }

  ${({ theme }) => theme.media('mobile')} {
    padding: ${({ theme }) => theme.spacing(2)};
    max-width: 340px;
  }
`

const OverlayTitle = styled(SectionTitle)`
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.media('mobile')} {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`

const CloseButton = styled.button`
  padding: 32px;
  margin: -28px;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.palette.background.contrastText};
  transition: color 0.05s ease-in-out;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  svg {
    margin-top: 5px;
  }

  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const LegendRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  &:last-child  {
    margin-bottom: 0;
  }
`

const ScoreContainer = styled.div`
  margin-top: 9px;
`

const LegendItemText = styled(Paragraph)`
  margin-left: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 0;

  ${({ theme }) => theme.media('mobile')} {
    margin-left: ${({ theme }) => theme.spacing(3)};
  }
`

interface Props {
  open: boolean
  onCloseClick(): void
}

const SkillsLegendOverlay = ({ open, onCloseClick }: Props) => {
  const rootStyle: React.CSSProperties | undefined = open ? { pointerEvents: 'all', opacity: 1 } : undefined
  const contentContainerStyle: React.CSSProperties | undefined = open ? { transform: 'translateY(0)' } : undefined
  return (
    <Root style={rootStyle}>
      <Background />
      <ContentContainer style={contentContainerStyle}>
        <Content>
          <OverlayTitle>
            {data.skills_legend_title}
            <CloseButton onClick={onCloseClick} aria-label={data.close_button_aria_label}>
              <FontAwesomeIcon className="fa-1x" icon={solid('xmark')} />
            </CloseButton>
          </OverlayTitle>
          {data.skills_legend_items.map((item, index) => (
            <LegendRow key={index}>
              <ScoreContainer>
                <SkillScore value={index + 1} />
              </ScoreContainer>
              <LegendItemText>{item}</LegendItemText>
            </LegendRow>
          ))}
        </Content>
      </ContentContainer>
    </Root>
  )
}

export default SkillsLegendOverlay
