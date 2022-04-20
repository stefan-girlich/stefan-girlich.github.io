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

  ${({ theme }) => theme.media('tablet')} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Title = styled.h1`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize('xl')};

  ${({ theme }) => theme.media('tablet')} {
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  }

  /* flex-direction: row; */
`

const Subtitle = styled.h1`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize('md')};
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: 1.3;
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
