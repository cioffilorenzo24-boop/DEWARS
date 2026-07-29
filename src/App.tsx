import "./App.css";
import "./header.css";
import "./choise-box.css";
import "./challenge.css";
import "./footer.css";
import { GetDevCard } from "./function/choise";
import { developers } from "./type";
import { useState } from "react";
import { ChallengerDev } from "./function/challengers";
import { BetterChoises } from "./function/footer";
import type { Dev } from "./type";

function App() {
  const [currentDevA, setCurrentDevA] = useState<Dev | null>(null);
  const [currentDevB, setCurrentDevB] = useState<Dev | null>(null);
  const [btn, setBtn] = useState<"A" | "B" | null>(null);

  const manageDev = (selectedDev: Dev) => {
    if (btn === "A") {
      setCurrentDevA(selectedDev);
      setBtn(null);
    } else if (btn === "B") {
      setCurrentDevB(selectedDev);
      setBtn(null);
    }
  };

  return (
    <>
      <header>
        <h1>
          <span className="title-colour">DEV</span>WARS
        </h1>
        <p>
          Seleziona due sviluppatori, confronta le loro competenze e scopri
          quale scegliere per il tuo progetto.
        </p>
      </header>
      <main>
        <section className="choise-box">
          <div className="btn-div">
            <button
              className={`btn-a ${btn === "A" ? "active-A" : ""}`}
              onClick={() => setBtn("A")}
            >
              Seleziona Dev A
            </button>
            <button
              className={`btn-b ${btn === "B" ? "active-B" : ""}`}
              onClick={() => setBtn("B")}
            >
              Seleziona Dev B
            </button>
          </div>
          <div className="choise-div">
            <GetDevCard
              developers={developers}
              manageDev={manageDev}
              currentDevA={currentDevA}
              currentDevB={currentDevB}
            />
          </div>
        </section>
        <section className="challenge-div">
          <div className="challengersA">
            {ChallengerDev(currentDevA, "DEV A")}
          </div>
          <div className="vs">VS</div>
          <div className="challengersB">
            {ChallengerDev(currentDevB, "DEV B")}
          </div>
        </section>
        <footer>
          <h2>Chi dovresti scegliere?</h2>
          <div className="betterChoiseDiv">
            {BetterChoises(currentDevA, currentDevB)}
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
