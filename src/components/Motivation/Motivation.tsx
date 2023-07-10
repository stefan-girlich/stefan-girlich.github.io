import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Revealable from '../Revealable/Revealable'
import MotivationItem from './MotivationItem'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

// TODO make icons configurable via data.json
const ICONS = [solid('code'), solid('house-chimney-user'), solid('seedling')]

const Motivation = () => {
  return (
    <Root>
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
