import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Root = styled.div`
  width: 960px;
  margin: 0 auto;
`

const CenterColumn = ({ children }: Props) => {
  return <Root>{children}</Root>
}

export default CenterColumn
