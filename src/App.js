import { Display } from "./Display";
import { Keyboard } from "./Keyboard";
import { Container } from "./Container";

function App() {
  return (
    <Container>
      <Display />
      <Keyboard />
    </Container>
  );
}

export default App;