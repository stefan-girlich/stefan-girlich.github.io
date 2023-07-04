import { useRef, useState } from 'react'
import CareerHistory from './components/CareerHistory/CareerHistory'
import FinalPage from './components/FinalPage/FinalPage'
import Goals from './components/Goals/Goals'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Motivation from './components/Motivation/Motivation'
import Skills from './components/Skills/Skills'
import SkillsLegendOverlay from './components/SkillsLegendOverlay/SkillsLegendOverlay'
import data from './config/data.json'

function HomePage() {
  const [isSkillsLegendOpen, setSkillsLegendOpen] = useState(false)
  const contactSectionRef = useRef<HTMLDivElement | null>(null)
  const onRequestSkillsLegend = () => setSkillsLegendOpen(true)
  const onRequestCloseSkillsLegend = () => setSkillsLegendOpen(false)
  const onRequestContact = () => contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <MainContent>
        <Header />
        <Goals onRequestContact={onRequestContact} />
        <Motivation elementRef={contactSectionRef} />
        <CareerHistory title={data.professional_career_history_title} items={data.professional_career_history_items} />
        {/* <CareerHistory title={data.education_history_title} items={data.education_history_items} /> */}
        <Skills
          title={data.technical_skills_title}
          subsections={data.technical_skills_subsections}
          onLegendButtonClick={onRequestSkillsLegend}
        />
        <Skills
          title={data.management_skills_title}
          subsections={data.management_skills_subsections}
          onLegendButtonClick={onRequestSkillsLegend}
        />
        {/* <Contact elementRef={contactSectionRef} /> */}
        <FinalPage />
      </MainContent>
      <SkillsLegendOverlay open={isSkillsLegendOpen} onCloseClick={onRequestCloseSkillsLegend} />
    </>
  )
}

export default HomePage
