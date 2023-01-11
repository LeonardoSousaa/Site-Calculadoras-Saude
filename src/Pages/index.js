import { useState } from "react";
import Button from "./../components/Button";
import Calculator from "./../components/Calculator";
import './style.css';

export default function App() {
  const [title, setTitle] = useState("Calculadora Ganho de Peso");
  const [isGainWeigth, setIsGainWeigth] = useState(true);
  const [isLoseWeigth, setIsLoseWeigth] = useState(false);
  const [carboidrato, setCarboidrato] = useState("");
  const [proteina, setProteina] = useState("");
  const [lipidio, setLipidio] = useState("");

  function calculateGain(peso) {
    setCarboidrato("Carboidrato: " + peso * 6 + "g");
    setProteina("Proteína: " + peso * 2 + "g");
    setLipidio("Lipídio: " + peso * 1.2 + "g");
  }

  function calculateLose(peso) {
    setCarboidrato("Carboidrato: " + peso * 2 + "g");
    setProteina("Proteína: " + peso * 1 + "g");
    setLipidio("Lipídio: " + peso * 1.2 + "g");
  }

  function gainWeigth() {
    setIsGainWeigth(true);
    setIsLoseWeigth(false);
  }

  function loseWeigth() {
    setIsLoseWeigth(true);
    setIsGainWeigth(false);
  }

  //HTML
  return (

    <div className="quartaSectionColor">
        
        <h6>Calcule a sua dieta para ganho ou perca de peso</h6>

        <div className="quartaSection">
            <div className="Calculator">
            <div className="buttons">
                <Button onClick={gainWeigth}>Ganhar Peso</Button>
                <Button onClick={loseWeigth}>Perder Peso</Button>
            </div>

            {isGainWeigth ? (
                <Calculator title={title} handleCalculator={calculateGain} />
            ) : null}

            {isLoseWeigth ? (
                <Calculator
                title="Calculadora Perda de Peso"
                handleCalculator={calculateLose}
                />
            ) : null}

            <p>Macronutrientes para consumir por dia:</p>
            <p>{carboidrato}</p>
            <p>{proteina}</p>
            <p>{lipidio}</p>
            </div>
                
                <div>
                    <p className="quarta_section_p"><b>Carboidrato</b>: São importantes fontes de energia para o corpo e desempenham um papel fundamental em muitas funções corporais, incluindo o crescimento e reparação de tecidos, a produção de hormônios e a manutenção da função nervosa.</p>
                    <br />
                    <p className="quarta_section_p"><b>Proteína</b>: São importantes para o crescimento e reparação de tecidos, a produção de hormônios e enzimas, o transporte de moléculas pelo corpo e a manutenção da estrutura e função celular.</p>
                    <br />
                    <p className="quarta_section_p"><b>Lipídio</b>: São uma classe de macronutrientes que inclui gorduras e óleos. Eles são importantes fontes de energia para o corpo e desempenham um papel fundamental em muitas funções corporais, incluindo a absorção de nutrientes, a proteção dos órgãos internos e a manutenção da temperatura corporal.</p>
                </div>
        </div>
     </div>

  );
}