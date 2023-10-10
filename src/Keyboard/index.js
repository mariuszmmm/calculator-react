import "./style.css";

export const Keyboard = ({ calculatorOn, calculatorOff, enterDigit, backspace, changeSign, squareRoot, percent, basicOperations, equals }) => (
  <div className="containerKeys">
    <button
      className="key key--min key--on"
      onClick={calculatorOn}
    >ON</button>
    <button
      className="key key--min"
      onClick={calculatorOff}
    >OFF</button>
    <div></div>
    <button
      className="key key--min"
      onClick={backspace}
    >⇽</button>
    <button
      className="key key--min"
      onClick={changeSign}
    >+/-</button>
    <button
      className="key key--min"
      onClick={squareRoot}
    >√</button>
    <button
      className="key key--min"
      onClick={percent}
    >%</button>
    <button
      className="key key--min"
      onClick={() => basicOperations("/")}
    >/</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("7")}
    >7</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("8")}
    >8</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("9")}
    >9</button>
    <button
      className="key"
      onClick={() => basicOperations("x")}
    >x</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("4")}
    >4</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("5")}
    >5</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("6")}
    >6</button>
    <button
      className="key"
      onClick={() => basicOperations("-")}
    >-</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("1")}
    >1</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("2")}
    >2</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("3")}
    >3</button>
    <button
      className="key key--max"
      onClick={() => basicOperations("+")}
    >+</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit("0")}
    >0</button>
    <button
      className="key key--dark"
      onClick={() => enterDigit(",")}
    >,</button>
    <button
      className="key key--dark"
      onClick={equals}
    >=</button>
  </div>
)


