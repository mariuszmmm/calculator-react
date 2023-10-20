import { ContainerKeys, Button } from "./styled"

export const Keyboard = ({ calculatorOn, calculatorOff, enterDigit, backspace, changeSign, squareRoot, percent, basicOperations, equals }) => (
  <ContainerKeys>
    <Button min on
      onClick={calculatorOn}
    >ON</Button>
    <Button
      min
      onClick={calculatorOff}
    >OFF</Button>
    <div></div>
    <Button min
      onClick={backspace}
    >⇽</Button>
    <Button min
      onClick={changeSign}
    >+/-</Button>
    <Button min
      onClick={squareRoot}
    >√</Button>
    <Button min
      onClick={percent}
    >%</Button>
    <Button min
      onClick={() => basicOperations("/")}
    >/</Button>
    <Button dark
      onClick={() => enterDigit("7")}
    >7</Button>
    <Button dark
      onClick={() => enterDigit("8")}
    >8</Button>
    <Button dark
      onClick={() => enterDigit("9")}
    >9</Button>
    <Button
      onClick={() => basicOperations("x")}
    >x</Button>
    <Button dark
      onClick={() => enterDigit("4")}
    >4</Button>
    <Button dark
      onClick={() => enterDigit("5")}
    >5</Button>
    <Button dark
      onClick={() => enterDigit("6")}
    >6</Button>
    <Button
      onClick={() => basicOperations("-")}
    >-</Button>
    <Button dark
      onClick={() => enterDigit("1")}
    >1</Button>
    <Button dark
      onClick={() => enterDigit("2")}
    >2</Button>
    <Button dark
      onClick={() => enterDigit("3")}
    >3</Button>
    <Button max
      onClick={() => basicOperations("+")}
    >+</Button>
    <Button dark
      onClick={() => enterDigit("0")}
    >0</Button>
    <Button dark
      onClick={() => enterDigit(",")}
    >,</Button>
    <Button dark
      onClick={equals}
    >=</Button>
  </ContainerKeys>
)


