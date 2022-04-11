import React from 'react'
import styled from 'styled-components/macro'
import CareerHistory from './components/CareerHistory/CareerHistory'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Motivation from './components/Motivation/Motivation'
import OpenToOpportunitiesNote from './components/OpenToOpportunitiesNote/OpenToOpportunitiesNote'
import Skills from './components/Skills/Skills'
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

      <Motivation />
      <CareerHistory title={data.professional_career_history_title} items={data.professional_career_history_items} />
      <CareerHistory title={data.education_history_title} items={data.education_history_items} />
      <Skills title={data.technical_skills_title} subsections={data.technical_skills_subsections} />
      <Skills title={data.management_skills_title} subsections={data.management_skills_subsections} />
      <Contact />
    </MainContent>
  )
}

export default HomePage
