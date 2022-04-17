import { useState } from 'react'
import styled, { useTheme } from 'styled-components/macro'
import { IS_TOUCH_DEVICE } from '../../index'
import { BrandColorSets } from '../../theme'

const Root = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: background-color 0.1s ease-in-out;

  ${({ theme }) => theme.media('tablet')} {
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  }

  * {
    cursor: pointer;
  }

  svg {
    transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;
  }

  :hover {
    svg {
      transform: scale(1.1);
    }
  }
`

const IconContainer = styled.span`
  ${({ theme }) => theme.media('tablet')} {
    width: 24px;
    text-align: center;
  }
`

const Label = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize('paragraph')};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spacing(2)};
  transition: color 0.1s ease-in-out;
`

interface Props {
  label: string
  url: string
  type: string
  icon: React.ReactNode
}

const ContactLink = ({ label, url, type, icon }: Props) => {
  const theme = useTheme()
  const [isHovering, setHovering] = useState(false)

  const enableHover = () => setHovering(true)
  const disableHover = () => setHovering(false)

  const brandColorSet = theme.palette.brands[type as keyof BrandColorSets]
  const rootStyle =
    isHovering || IS_TOUCH_DEVICE
      ? { borderColor: brandColorSet.main, color: brandColorSet.contrastText, backgroundColor: brandColorSet.main }
      : { borderColor: brandColorSet.main, color: brandColorSet.main }
  const labelStyle =
    isHovering || IS_TOUCH_DEVICE ? { color: 'inherit' } : { color: theme.palette.background.contrastText }
  return (
    <Root
      href={url}
      target={type === 'email' ? undefined : '_blank'}
      style={rootStyle}
      onMouseEnter={enableHover}
      onMouseLeave={disableHover}
    >
      <IconContainer>{icon}</IconContainer>
      <Label style={labelStyle}>{label}</Label>
    </Root>
  )
}

export default ContactLink
