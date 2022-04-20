import styled from 'styled-components/macro'
import { SectionTitle } from '../Header/Heading'
import Revealable from '../Revealable/Revealable'
import CareerHistoryListItem, { CareerHistoryItem } from './CareerHistoryListItem'

const Root = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
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
    <Revealable>
      <Root>
        <SectionTitle>{title}</SectionTitle>
        <CareerList>
          {items.map((item, index) => (
            <CareerHistoryListItem data={item} index={index} totalItemCount={items.length} key={index} />
          ))}
        </CareerList>
      </Root>
    </Revealable>
  )
}

export default CareerHistory
