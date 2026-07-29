import type { Dev } from "../type";

type StudentsProps = {
  developers: Dev[];
  currentDevA: Dev | null;
  currentDevB: Dev | null;
  manageDev: any;
};

export function GetDevCard({ developers, manageDev, currentDevA, currentDevB }: StudentsProps) {
  return (
    <>
      {developers.map((dev) => {
        const A = currentDevA?.id === dev.id
        const B = currentDevB?.id === dev.id
      return (
        <div className={`dev-Card ${A ? 'selected-A' : '' } ${B ? 'selected-B' : ''}`} onClick={() => manageDev(dev)}>
          <img src={dev.imageUrl} alt={dev.firstname} />
          <div className="dev-Name">
            {dev.firstname} {dev.lastname}
          </div>
        </div>
      )
      })}
    </>
  );
}
