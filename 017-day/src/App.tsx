import { AppContainer, Content, Flap } from "./AppStyle";
import { GlobalStyles } from "./style/global";

export function App() {

  return (
    <AppContainer>
      <GlobalStyles />
      <Content>
        <h1>John Doe</h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laborum! Libero soluta odit dolorum eaque.  
        </h3>
      </Content>
      <Flap className="flap"/>
    </AppContainer>
  )
}
