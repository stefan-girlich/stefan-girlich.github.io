import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MutableRefObject } from 'react'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Page from '../Page/Page'
import Revealable from '../Revealable/Revealable'
import MotivationItem from './MotivationItem'

const Root = styled(Page)`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

// TODO make icons configurable via data.json
const ICONS = [solid('code'), solid('house-chimney-user'), solid('handshake-angle')]

interface Props {
  elementRef: MutableRefObject<HTMLDivElement | null>
}

const Motivation = ({ elementRef }: Props) => {
  return (
    <Root ref={elementRef}>
      <Revealable>
        <SectionTitle>{data.motivation_title}</SectionTitle>
      </Revealable>
      {data.motivation_items.map((item, index) => (
        <Revealable delay={0.1 * index} key={index}>
          <MotivationItem
            title={item.title}
            text={item.text}
            icon={<FontAwesomeIcon className="fa-3x" icon={ICONS[index]} />}
          />
        </Revealable>
      ))}
    </Root>
  )
}

export default Motivation
