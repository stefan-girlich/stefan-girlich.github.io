import React from 'react'
import styled from 'styled-components'
import CareerHistory from './components/CareerHistory/CareerHistory'
import MainContent from './components/MainContent/MainContent'
import Header from './components/Header/Header'
import OpenToOpportunitiesNote from './components/OpenToOpportunitiesNote/OpenToOpportunitiesNote'

import data from './config/data.json'

const Button = styled.button`
  background: ${(props) => props.theme.palette.primary.main};
`

function HomePage() {
  return (
    <MainContent>
      <Header>
        <OpenToOpportunitiesNote />
      </Header>

      <CareerHistory title={data.career_history_title} items={data.career_history_items} />
    </MainContent>
  )
}

export default HomePage
