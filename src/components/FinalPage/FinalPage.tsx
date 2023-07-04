import styled from 'styled-components/macro'
import { SectionTitle } from '../Header/Heading'
import Page from '../Page/Page'
import Revealable from '../Revealable/Revealable'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Text = styled(SectionTitle)`
  justify-content: center;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
`

const FinalPage = () => {
  return (
    <Page>
      <Revealable>
        <Root>
          <Text>Thank you!</Text>
        </Root>
      </Revealable>
    </Page>
  )
}

export default FinalPage
