import { CardProps } from '../../../../App'
import { CardContainer } from './styles'

export function Card(props: CardProps) {
  return (
    <CardContainer variants={props.type}>
      <ul>
        <li className="pack">{props.pack}</li>
        <li className="price bottom-bar">&#36;{props.price}</li>
        {props.description.map((info) => {
          return (
            <li key={info} className="bottom-bar">
              {info}
            </li>
          )
        })}
        <li>
          <button className="btn">Learn More</button>
        </li>
      </ul>
    </CardContainer>
  )
}
