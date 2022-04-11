import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Paragraph from '../Paragraph/Paragraph'
import ContactLink from './ContactLink'

// TODO make icons configurable via data.json
const ICONS = [solid('envelope'), brands('linkedin'), brands('github'), brands('soundcloud')]

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`

const Contact = () => {
  return (
    <Root>
      <SectionTitle>{data.contact_title}</SectionTitle>
      <Paragraph>{data.contact_text}</Paragraph>
      <ButtonsContainer>
        {data.contact_links.map(({ label, url, type }, index) => (
          <ContactLink
            label={label}
            url={url}
            type={type}
            icon={<FontAwesomeIcon className="fa-lg" icon={ICONS[index]} />}
          />
        ))}
      </ButtonsContainer>
    </Root>
  )
}

export default Contact
