import React from 'react';
import MaterialTable from 'material-table';
const options = ['Table', 'Delivery'];
const status = ['Wait', 'In progress', 'On hold', 'Done'];
export default function Kitchen() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Time', field: 'Time', type: 'time'},
      {title: 'Surname', field: 'Surname'},
      {title: 'Options', field: 'Options', lookup: {0: options[0], 1: options[1]}},
      {title: 'Table Number', field: 'TableNumber', type: 'numeric'},
      {title: 'Description', field: 'Description'},
      {title: 'Status', field: 'status', lookup: {0: status[0], 1: status[1], 2: status[2], 3: status[3]}},
    ],
    data: [
      {Time: '12:00', Surname: 'Kowalczyk', Options: [0], TableNumber: 2, Description: 'lasagne', status: [1]},
      {Time: '13:00', Surname: 'Paczul', Options: [1], TableNumber: 0, Description: 'pizza', status: [2]},
      {Time: '15:00', Surname: 'Babienko', Options: [0], TableNumber: 2, Description: 'hamberga', status: [3]},
      {Time: '17:00', Surname: 'Majdan', Options: [0], TableNumber: 2, Description: 'fish', status: [0]},
    ],
  });
  return (
    <MaterialTable
      title='Orders'
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
