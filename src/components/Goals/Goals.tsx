import styled from 'styled-components'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import { RichTextParagraph } from '../Paragraph/Paragraph'
import Revealable from '../Revealable/Revealable'
import CallToActionButton from './CallToActionButton'
import Page from '../Page/Page'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

const Text = styled(RichTextParagraph)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

interface Props {
  onRequestContact(): void
}

const Goals = ({ onRequestContact }: Props) => {
  return (
    <Page>
      <Revealable>
        <Root>
          <SectionTitle>{data.goals_title}</SectionTitle>
          <Text>{data.goals_text}</Text>
          <CallToActionButton onClick={onRequestContact} />
        </Root>
      </Revealable>
    </Page>
  )
}

export default Goals
