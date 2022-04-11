import styled from 'styled-components'
import data from '../config/data.json'
import Paragraph from './Paragraph'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-block-end: ${({ theme }) => theme.spacing(3)};
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
    <header>
      <Row>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </Row>

      <Paragraph>{data.intro_text}</Paragraph>

      {children && <div>{children}</div>}
    </header>
  )
}

export default Header
