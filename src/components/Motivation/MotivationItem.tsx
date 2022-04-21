import { useRef } from 'react'
import styled from 'styled-components/macro'
import useOnScreen from '../../hooks/useOnScreen'
import { SubsectionTitle } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'

const MotivationSubsectionTitle = styled(SubsectionTitle)`
  color: ${({ theme }) => theme.palette.primary.main};
  transition: opacity 0.4s ease-out 0.1s;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(1)};
`

const Text = styled(Paragraph)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 0;
  transition: opacity 0.8s ease-out 0.2s;

  ${({ theme }) => theme.media('tablet')} {
    width: 48px;
  }

  ${({ theme }) => theme.media('mobile')} {
    margin-right: 0;
  }
`

const BaseIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 96px;
  color: ${({ theme }) => theme.palette.tertiary.main};
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;

  ${({ theme }) => theme.media('tablet')} {
    width: 48px;
  }
`

const IconContainer = styled(BaseIconContainer)`
  ${({ theme }) => theme.media('mobile')} {
    display: none;
  }
`

const MobileIconContainer = styled(BaseIconContainer)`
  ${({ theme }) => theme.media('mobile', 'min')} {
    display: none;
  }

  margin-left: ${({ theme }) => theme.spacing(2)};
`

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  &.unrevealed ${BaseIconContainer} {
    opacity: 0;
    transform: scale(1.5);
  }

  &.unrevealed ${MotivationSubsectionTitle} {
    opacity: 0;
  }

  &.unrevealed ${Text} {
    opacity: 0;
  }
`

interface Props {
  title: string
  text: string
  icon: React.ReactNode
}

const MotivationItem = ({ title, text, icon }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { wasOnScreenClassName } = useOnScreen(ref)
  return (
    <Root ref={ref} className={wasOnScreenClassName}>
      <MobileIconContainer>{icon}</MobileIconContainer>
      <MotivationSubsectionTitle>{title}</MotivationSubsectionTitle>
      <Content>
        <Text>{text}</Text>
        <IconContainer>{icon}</IconContainer>
      </Content>
    </Root>
  )
}

export default MotivationItem
