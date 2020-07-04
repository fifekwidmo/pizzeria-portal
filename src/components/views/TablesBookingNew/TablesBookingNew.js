import React from 'react';
import MaterialTable from 'material-table';
const starter = ['Vine', 'Vodka', 'Water'];
export default function TablesBookingNew() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Date', field: 'Date', type: 'date'},
      {title: 'Time', field: 'Time', type: 'time'},
      {title: 'Surname', field: 'Surname' },
      {title: 'Table', field: 'Table', type: 'numeric'},
      {title: 'During', field: 'During', type: 'numeric'},
      {title: 'People', field: 'People', type: 'numeric'},
      {title: 'Starter', field: 'starter', lookup: {0: starter[0], 1: starter[1], 2: starter[2]}},
    ],
  });
  return (
    <MaterialTable
      title='New Booking'
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
