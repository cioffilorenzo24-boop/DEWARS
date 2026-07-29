import type { Dev } from "../type";
import { GetAverage } from "./challengers";

export function BetterChoises(currentDevA: Dev, currentDevB: Dev) {
  if (currentDevA === null || currentDevB === null)
    return <p style={{ color: "white" }}>Seleziona gli sfidanti</p>;

  const A = GetAverage(currentDevA);
  const B = GetAverage(currentDevB);
  let winnerClass = "";
  let winnerFE = "";

  if (A.averageFrontendScore > B.averageFrontendScore) {
    winnerFE = currentDevA.firstname + " " + currentDevA.lastname;
    winnerClass = "winner-A";
  } else if (A.averageFrontendScore < B.averageFrontendScore) {
    winnerFE = currentDevB.firstname + " " + currentDevB.lastname;
    winnerClass = "winner-B";
  } else {
    winnerFE = "entrambi";
  }

  let winnerBE = "";

  if (A.averageBeckendScore > B.averageBeckendScore) {
    winnerBE = currentDevA.firstname + " " + currentDevA.lastname;
    winnerClass = "winner-A";
  } else if (A.averageBeckendScore < B.averageBeckendScore) {
    winnerBE = currentDevB.firstname + " " + currentDevB.lastname;
    winnerClass = "winner-B";
  } else {
    winnerBE = "entrambi";
  }

  let BestDev = "";
  if (A.overall > B.overall) {
    BestDev = currentDevA.firstname + " " + currentDevA.lastname;
    winnerClass = "winner-A";
  } else if (A.overall < B.overall) {
    BestDev = currentDevB.firstname + " " + currentDevB.lastname;
    winnerClass = "winner-B";
  } else {
    BestDev = "entrambi";
  }

  return (
    <>
      {currentDevA.skills.map((skillA, i) => {
        const skillB = currentDevB.skills[i];
        let winnerDev = "";
        let winnerClass = "";

        if (skillA.value > skillB.value) {
          winnerDev = currentDevA.firstname + " " + currentDevA.lastname;
          winnerClass = "winner-A";
        } else if (skillA.value < skillB.value) {
          winnerDev = currentDevB.firstname + " " + currentDevB.lastname;
          winnerClass = "winner-B";
        } else {
          winnerDev = "entrambi";
        }
        return (
          <>
            <div className="betterDev">
              Se vuoi il migliore in {skillA.label}, scegli{" "}
              <span className={winnerClass}>{winnerDev}</span>
            </div>
          </>
        );
      })}
      <div className="betterDev">
        Per il miglior Front-End, scegli <span className={winnerClass}>{winnerFE}</span>
      </div>
      <div className="betterDev">
        Per il miglior Beck-End, scegli <span className={winnerClass}>{winnerBE}</span>
      </div>
      <div className="bestDev">Complessivamente, scegli <span className={winnerClass}>{BestDev}</span></div>
    </>
  );
}
