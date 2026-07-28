import "./App.css";
import './header.css'
import './choise-box.css'
import './challenge.css'
import { GetDevCard } from "./function/choise";
import { developers } from "./type";
import { useState } from "react";

function App() {

  const [currentDevA, setCurrentDevA] = useState(null)
  const [currentDevB, setCurrentDevB] = useState(null)


  return (
    <>
      <header>
        <h1><span className="title-colour">DEV</span>WARS</h1>
        <p>
          Seleziona due sviluppatori, confronta le loro competenze e scopri
          quale scegliere per il tuo progetto.
        </p>
      </header>
      <main>
        <section className="choise-box">
          <div className="btn-div">
            <button className="btn-a">Seleziona Dev A</button>
            <button className="btn-b">Seleziona Dev B</button>
          </div>
          <div className="choise-div">
            <GetDevCard developers={developers}/>
          </div>
        </section>
        <section className="challenge-div">
          <div className="challengersA"></div>
          <div className="vs">VS</div>
          <div className="challengersB"></div>
        </section>
      </main>
    </>
  );
}

export default App;
