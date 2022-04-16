import styled from 'styled-components/macro'
import data from '../../config/data.json'
import RichTextParagraph from '../Paragraph/Paragraph'

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

const Header = () => {
  return (
    <Root>
      <TitleRow>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </TitleRow>

      <RichTextParagraph>{data.intro_text}</RichTextParagraph>
    </Root>
  )
}

export default Header
