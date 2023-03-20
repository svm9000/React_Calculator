import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState("0");

   const handleClick = (e) => {
    if (expression!=="0"){
      setExpression(expression + e.target.name);

    } else {
      setExpression(e.target.name);
    }
    /*Testing*/
    //console.log(expression)
  };

  const handleClear = () => {
    setExpression("0");
  };

  const handleCalculate = () => {
    /*If we have length 0 then we know we only have a number displayed  so don't evaluate result
      and just return the last value of the expression to be displayed.
    */
    /*Testing*/
    //console.log(`clean expression check ${expression.toString().replace(/[0-9\s]/g, '').length}`);

    
    let result_all = "";
    if (expression.toString().replace(/[0-9\s]/g, '').length>=0){
      

      const tokens = expression.split(/([+|\-|×|÷])/g);

      /*Testing*/
      //console.log(`tokens.length ${tokens.length}`);
      //console.log(`tokens ${tokens}`);

      // Evaluate multiplication and division first
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "×") {
          result_all = parseFloat(tokens[i - 1]) * parseFloat(tokens[i + 1]);
          tokens.splice(i - 1, 3, result_all.toString());
          i -= 2;
        } else if (tokens[i] === "÷") {
          result_all = parseFloat(tokens[i - 1]) / parseFloat(tokens[i + 1]);
          tokens.splice(i - 1, 3, result_all.toString());
          i -= 2;
        }
      }

      // Evaluate additions and subtraction next
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
          result_all = parseFloat(tokens[i - 1]) + parseFloat(tokens[i + 1]);
          tokens.splice(i - 1, 3, result_all.toString());
          i -= 2;
        } else if (tokens[i] === "-") {
          result_all = parseFloat(tokens[i - 1]) - parseFloat(tokens[i + 1]);
          tokens.splice(i - 1, 3, result_all.toString());
          i -= 2;
        }
      }
      setExpression(result_all);
  } else {
    
    setExpression(expression);

  }
    /*Testing*/
    //console.log(`expressiom ${expression}`);
    //console.log(`expressiom ${result_all}`);

    
  };

  return (
    /*we use the BEM method for naming components so they are reusable and */
    <div className="calculator">

      <div className="calculator__output">{expression}</div>

      <div className="calculator__keys">

        <button name = "+" className="calculator__key calculator__key--operator" onClick={handleClick}>+</button>

        <button name = "-" className="calculator__key calculator__key--operator" onClick={handleClick}>-</button>

        <button name = "×" className="calculator__key calculator__key--operator" onClick={handleClick}>&times;</button>

        <button name = "÷" className="calculator__key calculator__key--operator" onClick={handleClick}>÷</button>

        <button name = "7" className="calculator__key" onClick={handleClick}>7</button>

        <button name = "8" className="calculator__key" onClick={handleClick}>8</button>

        <button name = "9" className="calculator__key" onClick={handleClick}>9</button>

        <button name = "4" className="calculator__key" onClick={handleClick}>4</button>

        <button name = "5" className="calculator__key" onClick={handleClick}>5</button>

        <button name = "6" className="calculator__key" onClick={handleClick}>6</button>

        <button name = "1" className="calculator__key" onClick={handleClick}>1</button>

        <button name = "2" className="calculator__key" onClick={handleClick}>2</button>

        <button name = "3" className="calculator__key" onClick={handleClick}>3</button>

        <button name = "0" className="calculator__key" onClick={handleClick}>0</button>

        <button name ="." className="calculator__key" onClick = {handleClick}>.</button>

        <button className="calculator__key" onClick = {handleClear}>AC</button>

        <button className="calculator__key calculator__key--enter" onClick = {handleCalculate}>=</button>

      </div>

    </div>
  );
}


export default Calculator;




