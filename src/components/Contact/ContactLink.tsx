import styled, { useTheme } from 'styled-components/macro'
import { BrandColorSets } from '../../theme'

const Root = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
  cursor: pointer;

  * {
    cursor: pointer;
  }

  transition: padding 0.1s ease-in-out;
  svg {
    transition: transform 0.1s ease-in-out;
  }

  :hover {
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};

    svg {
      transform: scale(1.05);
    }
  }

  :not(:hover) {
    background: transparent;
  }
`

const Label = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spacing(2)};
`

interface Props {
  label: string
  url: string
  type: string
  icon: React.ReactNode
}

const ContactLink = ({ label, url, type, icon }: Props) => {
  const theme = useTheme()
  const brandColorSet = theme.palette.brands[type as keyof BrandColorSets]
  const backgroundStyle = { background: brandColorSet.main, color: brandColorSet.contrastText }
  return (
    <Root href={url} target={type === 'email' ? undefined : '_blank'} style={backgroundStyle}>
      {icon}
      <Label>{label}</Label>
    </Root>
  )
}

export default ContactLink
