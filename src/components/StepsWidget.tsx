import { useState } from "react";
import StepsForm from "./StepsForm";
import StepsTable from "./StepsTable";

export default function StepsWidget() {
  const [data, setData] = useState([
    {
      date: "2019-07-20",
      distance: 5.3,
    },
    {
      date: "2024-01-01",
      distance: 17.4,
    },
    {
      date: "2019-07-23",
      distance: 10.1,
    },
  ]);

  const addNewData = (newDate: string, newDistance: number) => {
    let oldData = data;
    const oldRecord = oldData.filter(({ date }) => date == newDate);
    if (oldRecord.length > 0) {
      oldData = [
        ...oldData.filter(({ date }) => date !== newDate),
        { date: newDate, distance: oldRecord[0].distance + newDistance },
      ];
    } else {
      oldData = [...oldData, { date: newDate, distance: newDistance }];
    }
    setData(oldData);
  };

  const deleteData = (dateToDelete: string) => {
    const newData = data.filter(({ date }) => date != dateToDelete);
    setData(newData);
  };
  return (
    <div>
      <StepsForm onAdd={addNewData}/>
      <StepsTable onDelete={deleteData} data={data} />
    </div>
  )
}