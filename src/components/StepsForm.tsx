import { useRef } from "react";

export default function StepsForm({ onAdd }) {
  const dateInput = useRef(null);
  const distanceInput = useRef(null);

  const handleInput = (event) => {
    event.preventDefault();
    if (distanceInput == null || dateInput == null || distanceInput.current.value == "" || dateInput.current.value == "") {
      return;
    }
    const distance = parseFloat(distanceInput.current.value);
    onAdd(dateInput.current.value, distance);
    dateInput.current.value = "";
    distanceInput.current.value = "";
    return true;
  }

  return (
    <form className="form" onSubmit={handleInput}>
      <div className="form__element">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input className="form__input" type="date" id="date" ref={dateInput} required />
      </div>
      <div className="form__element">
        <label htmlFor="distance">Пройдено км</label>
        <input className="form__input" type="text" id="distance" ref={distanceInput} required />
      </div>
      <button className="button_add" onClick={handleInput}>OK</button>
    </form>
  )
}