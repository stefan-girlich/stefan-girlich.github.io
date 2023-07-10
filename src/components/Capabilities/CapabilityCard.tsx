import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { SubsectionTitle } from '../Header/Heading'
import { RichTextParagraph } from '../Paragraph/Paragraph'
import Revealable from '../Revealable/Revealable'

const REVEAL_DURATION = 0.08
const ICON_TEXT_REVEAL_OFFSET = 0.3

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const IconContainer = styled(Revealable)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 48px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.tertiary.main};
`

const RevealableTextContainer = styled(Revealable)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CapabilityTitle = styled(SubsectionTitle)`
  transition: opacity 0.4s ease-out 0.1s;
  margin-bottom: 16px;
  font-weight: 600;
`

const Text = styled(RichTextParagraph)`
  text-align: center;
`

interface Props {
  title: string
  text: string
  icon: ReactNode
  index: number
}

const CapabilityCard = ({ title, text, icon, index }: Props) => {
  return (
    <Root>
      <IconContainer delay={index * REVEAL_DURATION}>{icon}</IconContainer>
      <RevealableTextContainer delay={ICON_TEXT_REVEAL_OFFSET + index * REVEAL_DURATION}>
        <CapabilityTitle>{title}</CapabilityTitle>
        <Text>{text}</Text>
      </RevealableTextContainer>
    </Root>
  )
}

export default CapabilityCard
