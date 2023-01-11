import { useState } from "react";
import Header from "./../Header";
import Button from "./../Button";
import "./style.css";

function Calculator(props) {
  const [peso, setPeso] = useState("");

  function clearFields() {
    setPeso("");
  }

  function onSubmit(event) {
    event.preventDefault();
    props.handleCalculator(peso);
  }

  return (
      <form id="calculator" onSubmit={onSubmit}>
        <Header title={props.title} />
        <div className="continer_peso">
          <h2 className="NamePeso">Peso (kg)</h2>
          <input
            placeholder="Digite seu peso"
            id="peso"
            onChange={(event) => setPeso(event.target.value)}
            value={peso}
          />
        </div>
        <div className="btn_footer">
          <Button onClick={clearFields}>Limpar Campos</Button>
          <Button>Calcular</Button>
        </div>
      </form>
  );
}

export default Calculator;