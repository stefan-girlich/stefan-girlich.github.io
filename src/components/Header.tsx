import data from '../config/data.json'

interface Props {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <header>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <p>{data.intro_text}</p>

      {children && <div>{children}</div>}
    </header>
  )
}

export default Header
