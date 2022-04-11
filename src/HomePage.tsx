import React from 'react'
import styled from 'styled-components'
import CareerHistory from './components/CareerHistory'
import CenterColumn from './components/CenterColumn'
import Header from './components/Header'
import OpenToOpportunitiesNote from './components/OpenToOpportunitiesNote'

import data from './config/data.json'

const Button = styled.button`
  background: ${(props) => props.theme.palette.primary.main};
`

function HomePage() {
  return (
    <CenterColumn>
      <Header>
        <OpenToOpportunitiesNote />
      </Header>

      <CareerHistory title={data.career_history_title} items={data.career_history_items} />
    </CenterColumn>
  )
}

export default HomePage
