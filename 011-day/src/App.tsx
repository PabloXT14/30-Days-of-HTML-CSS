import { Container, InputRadioAreaLabel } from "./AppStyles";
import { globalStyles } from "./styles/global"

export function App() {
  globalStyles();

  return (
    <Container>
      <form action="">
        <InputRadioAreaLabel>
          <input type="radio" name="radio" value="HTML" defaultChecked={true}/>
          <span>HTML</span>
        </InputRadioAreaLabel>

        <InputRadioAreaLabel>
          <input type="radio" name="radio" value="CSS" />
          <span>CSS</span>
        </InputRadioAreaLabel>

        <InputRadioAreaLabel>
          <input type="radio" name="radio" value="JS" />
          <span>Javascript</span>
        </InputRadioAreaLabel>
      </form>
    </Container>
  )
}
