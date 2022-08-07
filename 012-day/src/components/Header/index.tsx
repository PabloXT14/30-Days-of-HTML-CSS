import { useContext } from 'react'
import { CardContext } from '../../App'
import { HeaderContainer, Toggle, ToggleButton } from './styles'

export function Header() {
  const { handleParseValuesToMonthly } = useContext(CardContext)

  return (
    <HeaderContainer>
      <h1>Our Pricing</h1>
      <Toggle>
        <label>Annually</label>
        <ToggleButton>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" onClick={handleParseValuesToMonthly}>
            <div className="circle"></div>
          </label>
        </ToggleButton>
        <label>Monthly</label>
      </Toggle>
    </HeaderContainer>
  )
}
