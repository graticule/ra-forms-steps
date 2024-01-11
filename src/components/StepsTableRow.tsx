export default function StepsTableRow({ date, distance, onDelete }: { date:string, distance:number, onDelete: () => void }) {
  return (
    <div className="table__row">
      <div className="table__cell">{date}</div>
      <div className="table__cell">{distance}</div>
      <div className="table__cell"><button className="button_delete" onClick={onDelete}></button></div>
    </div>
  )
}