import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MutableRefObject } from 'react'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import { RichTextParagraph } from '../Paragraph/Paragraph'
import Revealable from '../Revealable/Revealable'
import ContactLink from './ContactLink'

// TODO make icons configurable via data.json
const ICONS = [solid('envelope'), brands('linkedin'), brands('github'), brands('soundcloud')]

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const ButtonsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.media('tablet', 'min')} {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(1.5)};
  }

  ${({ theme }) => theme.media('tablet')} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing(1.5)};
  }

  ${({ theme }) => theme.media('mobile')} {
    grid-template-columns: 1fr;
  }
`

const RevealableContactLink = styled(Revealable)`
  flex: 1;
`

interface Props {
  elementRef: MutableRefObject<HTMLDivElement | null>
}

const Contact = ({ elementRef }: Props) => {
  return (
    <Revealable>
      <Root ref={elementRef}>
        <SectionTitle>{data.contact_title}</SectionTitle>
        <RichTextParagraph>{data.contact_text}</RichTextParagraph>
        <ButtonsContainer>
          {data.contact_links.map(({ label, url, type }, index) => (
            <RevealableContactLink delay={0.05 * index} key={index}>
              <ContactLink
                label={label}
                url={url}
                type={type}
                icon={<FontAwesomeIcon className="fa-lg" icon={ICONS[index]} />}
              />
            </RevealableContactLink>
          ))}
        </ButtonsContainer>
      </Root>
    </Revealable>
  )
}

export default Contact
