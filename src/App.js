import { Container } from "./Container";
import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useFunction } from "./useFunction";

function App() {
  const {
    display,
    calculatorOff,
    calculatorOn,
    enterDigit,
    backspace,
    changeSign,
    squareRoot,
    percent,
    basicOperations,
    equals
  } = useFunction();

  return (
    <Container>
      <Display display={display} />
      <Keyboard
        calculatorOn={calculatorOn}
        calculatorOff={calculatorOff}
        enterDigit={enterDigit}
        backspace={backspace}
        changeSign={changeSign}
        squareRoot={squareRoot}
        percent={percent}
        basicOperations={basicOperations}
        equals={equals} />
    </Container>
  );
}

export default App;

