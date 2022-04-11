import styled from 'styled-components/macro'
import { SubsectionTitle } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const MotivationSubsectionTitle = styled(SubsectionTitle)`
  color: ${({ theme }) => theme.palette.primary.main};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(1)};
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 96px;
  color: ${({ theme }) => theme.palette.tertiary.main};
`

const Text = styled(Paragraph)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 0;
`

interface Props {
  title: string
  text: string
  icon: React.ReactNode
}

const MotivationItem = ({ title, text, icon }: Props) => {
  return (
    <Root>
      <MotivationSubsectionTitle>{title}</MotivationSubsectionTitle>
      <Content>
        <Text>{text}</Text>
        <IconContainer>{icon}</IconContainer>
      </Content>
    </Root>
  )
}

export default MotivationItem
