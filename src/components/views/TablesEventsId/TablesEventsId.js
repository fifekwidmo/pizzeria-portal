import React from 'react';
import MaterialTable from 'material-table';
const eventType = ['Birthday', 'Wedding'];
const starter = ['Vine', 'Vodka', 'Water'];

export default function TablesEventsId() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Event Type', field: 'EventType', lookup: {0: eventType[0], 1: eventType[1]}},
      {title: 'Date', field: 'Date', type: 'date'},
      {title: 'Time', field: 'Time', type: 'time'},
      {title: 'Surname', field: 'Surname'},
      {title: 'Table', field: 'Table', type: 'numeric'},
      {title: 'During', field: 'During', type: 'numeric'},
      {title: 'People', field: 'People', type: 'numeric'},
      {title: 'Starter', field: 'starter', lookup: {0: starter[0], 1: starter[1], 2: starter[2]}},
      
    ],
    data: [
      {EventType: [1], Date: '12/07/2020', Time: '12:00', Surname: 'Kowalczyk', Table: 2, During: 2, People: 2, starter: [0]},
      {EventType: [0], Date: '04/07/2020', Time: '18:00', Surname: 'Majdan', Table: 5, During: 1, People: 13, starter: [2]},
      {EventType: [1], Date: '12/07/2020', Time: '12:00', Surname: 'Stanowski', Table: 1, During: 2, People: 5, starter: [1]},
    ],
  });

  return (
    <MaterialTable
      title='Edit events'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
