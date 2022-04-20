import { useRef } from 'react'
import styled from 'styled-components/macro'
import useOnScreen from '../../hooks/useOnScreen'

const Root = styled.div`
  transition: opacity 0.3s ease-in, transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.unrevealed {
    opacity: 0;
    transform: translateY(8px);
  }

  &.unrevealed.no-translate {
    transform: none;
  }
`

interface Props {
  children: React.ReactNode
  delay?: number // seconds
  className?: string
  disableTranslate?: boolean
}

const Revealable = ({ children, delay, className, disableTranslate }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { wasOnScreenClassName } = useOnScreen(ref)
  const disableTranslateClassName = disableTranslate ? 'no-translate' : undefined
  const style = delay !== undefined ? { transitionDelay: `${delay}s` } : {}
  return (
    <Root ref={ref} className={`${className} ${wasOnScreenClassName} ${disableTranslateClassName}`} style={style}>
      {children}
    </Root>
  )
}

export default Revealable
