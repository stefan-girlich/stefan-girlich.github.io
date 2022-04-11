import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Root = styled.div`
  padding-top: 1px; /* to fix margin collapsing */
  padding-bottom: 1px; /* to fix margin collapsing */
  background: ${(props) => props.theme.palette.background.main};
  color: ${(props) => props.theme.palette.background.contrastText};
`

const CenterColumn = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const MainContent = ({ children }: Props) => {
  return (
    <Root>
      <CenterColumn>{children}</CenterColumn>
    </Root>
  )
}

export default MainContent
