import styled from 'styled-components/macro'

const Paragraph = styled.p`
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

export default Paragraph
