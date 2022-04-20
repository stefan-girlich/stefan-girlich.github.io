import { MutableRefObject, useEffect, useMemo, useState } from 'react'

const useOnScreen = (ref: MutableRefObject<HTMLElement | null>) => {
  const [isOnScreen, setOnScreen] = useState(false)
  const [wasOnScreen, setWasOnScreen] = useState(false)

  const isOnScreenClassName = useMemo(() => (isOnScreen ? undefined : 'unrevealed'), [isOnScreen])
  const wasOnScreenClassName = useMemo(() => (wasOnScreen ? undefined : 'unrevealed'), [wasOnScreen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting)
        setWasOnScreen(entry.isIntersecting || wasOnScreen)
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.unobserve(ref.current!)
  }, [ref, setOnScreen, setWasOnScreen, wasOnScreen])
  return {
    isOnScreen,
    wasOnScreen,
    isOnScreenClassName,
    wasOnScreenClassName,
  }
}

export default useOnScreen
