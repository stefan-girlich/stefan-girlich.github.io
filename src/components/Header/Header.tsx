import styled from 'styled-components/macro'
import data from '../../config/data.json'
import RichTextParagraph from '../Paragraph/Paragraph'
import Revealable from '../Revealable/Revealable'
import CallToActionButton from './CallToActionButton'

const Root = styled.header`
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
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
`

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize('md')};
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: 1.3;
`

const HomePageParagraph = styled(RichTextParagraph)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

interface Props {
  onRequestContact(): void
}

const Header = ({ onRequestContact }: Props) => {
  return (
    <Root>
      <TitleRow>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </TitleRow>

      <Revealable disableTranslate>
        {data.intro_texts.map((text, index) => (
          <HomePageParagraph key={index}>{text}</HomePageParagraph>
        ))}

        <CallToActionButton onClick={onRequestContact} />
      </Revealable>
    </Root>
  )
}

export default Header
