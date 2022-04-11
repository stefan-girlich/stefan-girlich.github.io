import data from '../../config/data.json'
import { H4 } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'

const OpenToOpportunitiesNote = () => {
  return (
    <div>
      <H4>{data.open_to_opportunities_title}</H4>
      <Paragraph>{data.open_to_opportunities_text}</Paragraph>
    </div>
  )
}

export default OpenToOpportunitiesNote
