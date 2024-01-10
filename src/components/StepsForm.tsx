export default function StepsForm() {
  return (
    <div className="form">
      <div className="form__element">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="date" id="date" />
      </div>
      <div className="form__element">
        <label htmlFor="distance">Пройдено км</label>
        <input type="number" id="distance" />
      </div>
      <button>OK</button>
    </div>
  )
}