export interface CareerHistoryItem {
  organization: string
  role: string
  start_year: number
  end_year: number
  text: string
  activities: string[]
  tech_tags: string[]
  softskill_tags: string[]
}

interface Props {
  title: string
  items: CareerHistoryItem[]
}

const CareerHistory = ({ title, items }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((item, index) => (
        <div key={index}>
          <h4>{item.organization}</h4>
          <h4>{item.role}</h4>
          <h4>
            {item.start_year} - {item.end_year}
          </h4>

          <p>{item.text}</p>

          <ul>
            {item.activities.map((activity, activityIndex) => (
              <li key={`${index}_${activityIndex}`}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CareerHistory
