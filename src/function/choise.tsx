import type { Dev } from '../type'

type StudentsProps = {
    developers:Dev[]
}

export function GetDevCard({ developers }: StudentsProps) {
    return (
        <>
        {developers.map((dev) => (
        
            <div className='dev-Card'>
                <img src={dev.imageUrl} alt={dev.firstname} />
                <div className='dev-Name'>{dev.firstname} {dev.lastname}</div>
            </div>
        
    ))}
        </>
        );
}

