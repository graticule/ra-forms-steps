import StepsTableRow from "./StepsTableRow";

export default function StepsTable({ data, onDelete}) {
  return (
    <>
      <div className="table__header">
        <div className="table__cell">Дата</div>
        <div className="table__cell">Расстояние</div>
        <div className="table__cell"></div>
      </div>
    <div className="table">
    {data
      .sort((a, b) => {return a.date > b.date ? 1 : -1; })
      .map(({ date, distance }) => (
        <StepsTableRow key={date} date={date} distance={distance} onDelete={() => onDelete(date)}/>
      ))}
    </div>
    </>
  )
}