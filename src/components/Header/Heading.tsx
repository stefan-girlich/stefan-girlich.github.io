import styled from 'styled-components/macro'

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize('lg')};
  font-weight: 500;
`
export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize('md')};
  font-weight: 500;
  margin-block-start: ${({ theme }) => theme.spacing(2)};
  margin-block-end: ${({ theme }) => theme.spacing(2)};
`

export const SectionTitle = styled(H3)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`
export const SubsectionTitle = styled(H4)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`
