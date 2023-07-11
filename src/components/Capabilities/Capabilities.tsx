import styled from 'styled-components/macro'
import data from '../../config/data.json'
import { SectionTitle } from '../Header/Heading'
import Revealable from '../Revealable/Revealable'
import CapabilityCard from './CapabilityCard'

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// TODO make icons configurable via data.json
const ICONS = [
  solid('compass-drafting'),
  solid('screwdriver-wrench'),
  solid('truck-fast'),
  solid('vial'),
  solid('signs-post'),
  solid('handshake-simple'),
]

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

const CapabilitiesSectionTitle = styled(SectionTitle)`
  margin-bottom: 40px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${({ theme }) => theme.media('tablet')} {
    justify-content: center;
    grid-template-columns: 260px;
  }
`

const Capabilities = () => {
  return (
    <Revealable disableTranslate>
      <Root>
        <CapabilitiesSectionTitle>{data.capabilities_title}</CapabilitiesSectionTitle>
        <Grid>
          {data.capabilities.map(({ title, text }, index) => (
            <CapabilityCard
              title={title}
              text={text}
              icon={<FontAwesomeIcon className="fa-3x" icon={ICONS[index]} />}
              index={index}
            />
          ))}
        </Grid>
        {/* <Text>{'data.goals_text'}</Text> */}
      </Root>
    </Revealable>
  )
}

export default Capabilities
