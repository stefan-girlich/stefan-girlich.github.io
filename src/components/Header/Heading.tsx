import styled from 'styled-components'

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
`
export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  margin-block-start: ${({ theme }) => theme.spacing(2)};
  margin-block-end: ${({ theme }) => theme.spacing(2)};
`
export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
`
