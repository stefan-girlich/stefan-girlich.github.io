import styled from 'styled-components/macro'

export const Root = styled.p`
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.background.contrastText};
    border-bottom-color: ${({ theme }) => theme.palette.background.contrastText};
    border-bottom-width: 0.5px;
    border-bottom-style: solid;
    cursor: pointer;
    transition: border-bottom-width 0.05s ease-in-out, color 0.05s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    border-bottom-color: ${({ theme }) => theme.palette.primary.main};
    border-bottom-width: 0px;
  }
`

interface Props {
  children: string
}

const Paragraph = ({ children }: Props) => <Root dangerouslySetInnerHTML={{ __html: children }} />

export default Paragraph
