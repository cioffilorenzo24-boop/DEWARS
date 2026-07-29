import type { Dev } from "../type";


function GetAverage(currentDev: Dev) {
  let frontendScore = 0;
  let frontendCount = 0;
  let beckendScore = 0;
  let beckendCount = 0;
  let totalSum = 0;
  let totalSumCount = 0;

  currentDev.skills.forEach((s) => {
    if (s.type === "front-end") {
      frontendScore += s.value;
      frontendCount++;
    } else if (s.type === "back-end") {
      beckendScore += s.value;
      beckendCount++;
    }
  });
  const averageFrontendScore = Number((frontendScore / frontendCount).toFixed(1));
  const averageBeckendScore = Number((beckendScore / beckendCount).toFixed(1));

  currentDev.skills.forEach((s) => {
    totalSum += s.value;
    totalSumCount++;
  });

  const overall = Number((totalSum / totalSumCount).toFixed(1));
  return {
    averageFrontendScore,
    averageBeckendScore,
    overall,
  };
}

function OverallBarr(currentDev: Dev) {
  return (
    <>
    {currentDev.skills.map((s) => {
      return (
        <div className="barr-container">
          <div className="upperSide-barr">
            <span>
              <strong>{s.label.toUpperCase()}</strong> <small>{s.type}</small>
            </span>
            <span><small><b>{s.value}/100</b></small></span>
          </div>
          <div className="lowerSide-barr">
            <div className={`bar ${s.type === 'front-end' ? 'bar-frontEnd' : 'bar-beckEnd'} `} style={{width: `${s.value}%`}}></div>
          </div>
        </div>
      )
    })}
    </>
  )
}



export function ChallengerDev(currentDev: Dev | null, label: string) {
  if (currentDev === null) {
    return <p style={{ color: "white" }}>Seleziona uno sfidante</p>;
  }

  return (
    <>
      <div
        className="img-challenger"
        style={{
          backgroundImage: `url(${currentDev.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      >
        <div className={`dev-class ${label === 'DEV A' ? 'dev-A' : 'dev-B'}`}>{label}</div>
        <div className="challenger-dates">
          <h3>
            {currentDev.firstname} {currentDev.lastname}
          </h3>
          <p>
            Nato/a il {currentDev.birthDate}   Genere: {currentDev.gender === 'f' ? 'Femminile' : 'Maschile'}
          </p>
        </div>
      </div>
      <div className="average-stats">
        <div className="stats">
          <div className="skills-name">FRONT-END</div>
          <b>{GetAverage(currentDev).averageFrontendScore}</b>
        </div>
        <div className="stats">
          <div className="skills-name">BECK-END</div>
          <b>{GetAverage(currentDev).averageBeckendScore}</b>
        </div>
        <div className="stats">
          <div className="skills-name">OVERALL</div>
          <b>{GetAverage(currentDev).overall}</b>
          </div>
      </div>
      <div className="barr-stats">
        {OverallBarr(currentDev)}
      </div>
    </>
  );
}
