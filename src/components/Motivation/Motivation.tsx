import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import MotivationItem from './MotivationItem'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

// TODO make icons configurable via data.json
const ICONS = [solid('code'), solid('house-chimney-user'), solid('handshake-angle')]

const Motivation = () => {
  return (
    <Root>
      <SectionTitle>{data.motivation_title}</SectionTitle>
      {data.motivation_items.map((item, index) => (
        <MotivationItem
          title={item.title}
          text={item.text}
          icon={<FontAwesomeIcon className="fa-3x" icon={ICONS[index]} />}
          key={index}
        />
      ))}
    </Root>
  )
}

export default Motivation
