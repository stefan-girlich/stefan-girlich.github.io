import styled from 'styled-components'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CallToActionButton from './CallToActionButton'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

const Text = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const Goals = () => {
  const onButtonClick = () => {}

  return (
    <Root>
      <SectionTitle>{data.goals_title}</SectionTitle>
      <Text>{data.goals_text}</Text>
      <CallToActionButton onClick={onButtonClick} />
    </Root>
  )
}

export default Goals
