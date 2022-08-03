import { Content, Drop, MainContainer } from "./AppStyles";
import { globalStyles } from "./styles/global"

export function App() {
  globalStyles();

  return (
    <MainContainer>
      <Drop></Drop>
      <Drop options='drop2'></Drop>
      <Content>
        <h1>Dropmorphism</h1>
        <p>Both the drops are created using CSS</p>
      </Content>
    </MainContainer>
  )
}
