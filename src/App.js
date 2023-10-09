import { Display } from "./Display";
import { Keyboard } from "./Keyboard";
import { Container } from "./Container";
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [componentA, setComponentA] = useState("");
  const [action, setAction] = useState("");
  const [componentB, setComponentB] = useState("");
  const [result, setResult] = useState("");
  const [off, setOff] = useState(true);
  const [cleanDisplay, setCleanDisplay] = useState(false);

  useEffect(() => {
    let currentDisplay = display;
    let displayInteger = (`${Math.round(Number(display))}`);

    if (display) {

      if ((Math.abs(Number(display)) < 0.00000001) && (result)) {
        currentDisplay = "0";
        setComponentA("0");
        setAction("");
        setComponentB("");
        setResult("");
      };

      if (currentDisplay.length > 9) {
        if ((displayInteger.length > 9)) {
          currentDisplay = (Number(currentDisplay).toExponential(3) + "")
        } else {
          currentDisplay = Number(currentDisplay).toFixed(displayInteger.length >= 9 ? 0 : 9 - displayInteger.length);
        };
      };

      if ((currentDisplay === "NaN") || (currentDisplay === "Infinity") || (currentDisplay === "-Infinity")) {
        currentDisplay = "ERROR";
      };
    };

    setDisplay(currentDisplay);
  }, [display, result]);

  const calculatorOff = () => {
    setDisplay("");
    setComponentA("");
    setAction("");
    setComponentB("");
    setResult("");
    setOff(true)
    setCleanDisplay(false)
  };

  const calculatorOn = () => {
    setDisplay("0");
    setComponentA(0);
    setAction("");
    setComponentB("");
    setResult("");
    setOff(false)
    setCleanDisplay(false)
  };

  const selectComponent = (currentDisplay) => {
    if (!action || result !== "") {
      setComponentA(Number(currentDisplay))
    } else {
      setComponentB(Number(currentDisplay))
    };
  };

  const enterDigit = (keyValue) => {
    let currentDisplay;

    if (cleanDisplay) {
      currentDisplay = "0";
      setCleanDisplay(false);
    } else {
      currentDisplay = display;
    };
    if (result !== "") setResult("");
    if (currentDisplay.length >= 9) return;

    const currentChar = (char) => {
      currentDisplay === "0" ? currentDisplay = char : currentDisplay = currentDisplay + char;
    }

    switch (keyValue) {
      case "1": currentChar("1");
        break;
      case "2": currentChar("2");
        break;
      case "3": currentChar("3");
        break;
      case "4": currentChar("4");
        break;
      case "5": currentChar("5");
        break;
      case "6": currentChar("6");
        break;
      case "7": currentChar("7");
        break;
      case "8": currentChar("8");
        break;
      case "9": currentChar("9");
        break;
      case "0": currentChar("0");
        break;
      case ",": currentDisplay = currentDisplay + "."
        break;
      default: return
    };

    if (currentDisplay.indexOf(".") !== currentDisplay.lastIndexOf(".")) {
      currentDisplay = (currentDisplay.slice(0, -1));
    };

    if (currentDisplay.charAt(currentDisplay.length - 1) !== ".") {
      selectComponent(currentDisplay);
    };

    setDisplay(currentDisplay);
  };


  const calculate = (a, operator, b) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "/":
        return a / b;
      default: return
    };
  };

  const backspace = () => {
    let currentDisplay = display;
    if ((result === "" && componentB !== "") || (result === "" && !action && componentB === "")) {
      currentDisplay = currentDisplay.slice(0, -1);
      if ((currentDisplay === "-") || (currentDisplay === "")) currentDisplay = "0"
      if (currentDisplay.charAt(currentDisplay.length - 1) === ".") {
        currentDisplay = currentDisplay.slice(0, -1);
      }
      setDisplay(currentDisplay);
      selectComponent(currentDisplay);
    };
  };

  const changeSign = () => {
    let currentDisplay;

    if (result === "") {
      currentDisplay = -display + "";
      if (((componentA !== "") && !action) || (componentB !== "")) {
        setDisplay(currentDisplay);
        selectComponent(currentDisplay);
      };
    };
  };

  const squareRoot = () => {
    let currentDisplay;

    if (display !== "") { currentDisplay = Math.sqrt(Number(display)) }
    else return;

    if (result !== "" || componentB !== "") {
      setComponentB("");
      setResult("");
    };

    setDisplay(currentDisplay + "");
    setComponentA(Number(currentDisplay));
  };

  const percent = () => {
    let currentComponentB;
    let calculation;

    if (componentB !== "" && result === "") {
      if (action === "+" || action === "-") {
        currentComponentB = (componentA * componentB / 100);
      };
      if (action === "x" || action === "/") {
        currentComponentB = (componentB / 100);
      };

      calculation = calculate(componentA, action, currentComponentB)
      setDisplay(calculation + "");
      setComponentB(calculation);
      setResult(calculation);
    };
  };

  const basicOperations = (keyValue) => {
    setCleanDisplay(true);
    setResult("");

    if (componentA !== "" && !off) {
      let calculation;

      setAction(keyValue);
      if (action && componentB !== "" && result === "") {
        calculation = calculate(componentA, action, componentB);
        setDisplay(calculation + "");
        setComponentA(Number(calculation));
        setComponentB("");
        setResult("");
      };
    };
  };

  const equals = () => {
    let calculation;

    if (action && componentB !== "" && !off) {
      calculation = calculate(componentA, action, componentB);
      setDisplay(calculation + "");
      setComponentA(calculation);
      setResult(calculation);
      setCleanDisplay(true);
    };
  };

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

