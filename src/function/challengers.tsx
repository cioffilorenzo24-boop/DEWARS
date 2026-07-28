import { Dev } from "../type";

export function ChallengerA(currentDevA: Dev) {
    if (currentDevA === null) {
        return <p>Seleziona uno sfidante</p>
    }

    return (
        <>
            <div className="img-challenger" style={{backgroundImage: `${currentDevA.imageUrl}`}}>
                <div className="dev-class">DEV A</div>
                <div className="challenger-dates">
                    <h3>{currentDevA.firstname} {currentDevA.lastname}</h3>
                    <p>Nato/a il {currentDevA.birthDate}  Genere:{currentDevA.gender}</p>
                </div>
            </div>
        </>
    )
}