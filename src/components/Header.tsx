import styled from 'styled-components'
import data from '../config/data.json'
import Paragraph from './Paragraph'

const Root = styled.header`
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const Title = styled.h1`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const Subtitle = styled.h1`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

interface Props {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <Root>
      <TitleRow>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </TitleRow>

      <Paragraph>{data.intro_text}</Paragraph>

      {children && <div>{children}</div>}
    </Root>
  )
}

export default Header
