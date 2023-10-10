import { useEffect, useState } from "react";

export const useFunction = () => {
  const [display, setDisplay] = useState("");
  const [componentA, setComponentA] = useState("");
  const [action, setAction] = useState("");
  const [componentB, setComponentB] = useState("");
  const [result, setResult] = useState("");
  const [off, setOff] = useState(true);
  const [readyToClean, setReadyToClean] = useState(false);

  const calculatorOn = () => {
    setDisplay("0");
    setComponentA(0);
    setAction("");
    setComponentB("");
    setResult("");
    setOff(false)
    setReadyToClean(false)
  };

  const calculatorOff = () => {
    setDisplay("");
    setComponentA("");
    setAction("");
    setComponentB("");
    setResult("");
    setOff(true)
    setReadyToClean(false)
  };

  const backspace = () => {
    let currentDisplay = display;

    if (off) return;
    if (result === "" && (componentB !== "" || (componentB === "" && !action))) {
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

    if (off) return;
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

    if (off) return;
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

    if (off) return;
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
    let calculation;

    if (off) return;
    setReadyToClean(true);
    setResult("");
    if (componentA !== "") {
      setAction(keyValue);
      if (action && componentB !== "" && result === "") {
        calculation = calculate(componentA, action, componentB);
        setDisplay(calculation + "");
        setComponentA(Number(calculation));
        setComponentB("");
        setResult("");
      };

      if (action && componentB !== "" && result !== "") {
        setComponentB(result);
      };
    };
  };

  const equals = () => {
    let calculation;

    if (off) return;
    if (action && componentB !== "") {
      calculation = calculate(componentA, action, componentB);
      setDisplay(calculation + "");
      setComponentA(calculation);
      setResult(calculation);
      setReadyToClean(true);
    };
  };

  const enterDigit = (keyValue) => {
    let currentDisplay;

    if (off) return;
    if (readyToClean) {
      currentDisplay = "0";
      setReadyToClean(false);
    } else {
      currentDisplay = display;
    };
    if (result !== "") setResult("");
    if (currentDisplay.length >= 9) return;

    const currentChar = (char) => {
      currentDisplay === "0" ? currentDisplay = char : currentDisplay = currentDisplay + char;
    }

    keyValue === "," ? currentDisplay += "." : currentChar(keyValue);

    if (currentDisplay.indexOf(".") !== currentDisplay.lastIndexOf(".")) {
      currentDisplay = (currentDisplay.slice(0, -1));
    };

    if (currentDisplay.charAt(currentDisplay.length - 1) !== ".") {
      selectComponent(currentDisplay);
    };

    setDisplay(currentDisplay);
  };

  const selectComponent = (currentDisplay) => {
    if (!action || result !== "") {
      setComponentA(Number(currentDisplay))
    } else {
      setComponentB(Number(currentDisplay))
    };
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

      if (["NaN", "Infinity", "-Infinity"].includes(currentDisplay)) {
        currentDisplay = "ERROR";
        setOff(true);
      };
    };

    setDisplay(currentDisplay);
  }, [display, result]);

  return {
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
  };
};