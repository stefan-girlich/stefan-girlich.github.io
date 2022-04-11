import styled from 'styled-components'
import { H3 } from '../Header/Heading'
import CareerHistoryListItem, { CareerHistoryItem } from './CareerHistoryListItem'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Title = styled(H3)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const CareerList = styled.ul`
  list-style: none;
`

interface Props {
  title: string
  items: CareerHistoryItem[]
}

const CareerHistory = ({ title, items }: Props) => {
  return (
    <Root>
      <Title>{title}</Title>
      <CareerList>
        {items.map((item, index) => (
          <CareerHistoryListItem data={item} index={index} totalItemCount={items.length} key={index} />
        ))}
      </CareerList>
    </Root>
  )
}

export default CareerHistory
