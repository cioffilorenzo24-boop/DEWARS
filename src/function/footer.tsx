import type { Dev } from "../type";
import { GetAverage } from "./challengers";

export function BetterChoises(currentDevA: Dev | null, currentDevB: Dev | null) {
  if (currentDevA === null || currentDevB === null) return;

  const A = GetAverage(currentDevA);
  const B = GetAverage(currentDevB);

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
            <div className="betterDev" style={{borderLeft: '4px solid #93b7fb'}}>
              Se vuoi il migliore in {skillA.label}, scegli
              <span className={winnerClass}>{winnerDev}</span>
            </div>
          </>
        );
      })}

      {A.map((statA, i) => {
        let winnerDev = "";
        let winnerFeBeClass = "";
        const statB = B[i];
        if (statA.value > statB.value) {
          winnerDev = `${currentDevA.firstname} ${currentDevA.lastname}`;
          winnerFeBeClass = "winner-A";
        } else if (statA.value < statB.value) {
          winnerDev = `${currentDevB.firstname} ${currentDevB.lastname}`;
          winnerFeBeClass = "winner-B";
        } else {
          winnerDev = "entrambi";
        }
        return (
          <>
            <div
              className={statA.label !== "OVERALL" ? "betterDev" : "bestDev"}
              style = {{
                borderLeft: statA.label !== 'OVERALL' ? "4px solid #d25959" : "4px solid #ffff00"
              }}
            >
              {statA.label === "OVERALL"
                ? "Complessivamente, scegli"
                : `Per il miglior ${statA.label.toLowerCase()}, scegli `}
              <span className={winnerFeBeClass}>{winnerDev}</span>
            </div>
          </>
        );
      })}
    </>
  );
}
