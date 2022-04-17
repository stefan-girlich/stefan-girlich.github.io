import styled from 'styled-components/macro'

interface Props {
  children: React.ReactNode
}

const Root = styled.div`
  padding-top: 1px; /* to fix margin collapsing */
  padding-bottom: 1px; /* to fix margin collapsing */
  background: ${({ theme }) => theme.palette.background.main};
  color: ${({ theme }) => theme.palette.background.contrastText};
`

const CenterColumn = styled.div`
  max-width: 800px;
  margin: 0 auto;

  ${({ theme }) => theme.media('tablet')} {
    max-width: 440px;
  }
`

const MainContent = ({ children }: Props) => {
  return (
    <Root>
      <CenterColumn>{children}</CenterColumn>
    </Root>
  )
}

export default MainContent
