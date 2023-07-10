import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { SubsectionTitle } from '../Header/Heading'
import { RichTextParagraph } from '../Paragraph/Paragraph'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 48px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.tertiary.main};
  /* transition: transform 0.4s ease-out, opacity 0.4s ease-out; */

  /* ${({ theme }) => theme.media('tablet')} {
    width: 48px;
  } */
`

const CapabilityTitle = styled(SubsectionTitle)`
  transition: opacity 0.4s ease-out 0.1s;
  margin-bottom: 16px;
`

const Text = styled(RichTextParagraph)`
  text-align: center;
`

interface Props {
  title: string
  text: string
  icon: ReactNode
}

const CapabilityCard = ({ title, text, icon }: Props) => {
  return (
    <Root>
      <IconContainer>{icon}</IconContainer>
      <CapabilityTitle>{title}</CapabilityTitle>
      <Text>{text}</Text>
    </Root>
  )
}

export default CapabilityCard
