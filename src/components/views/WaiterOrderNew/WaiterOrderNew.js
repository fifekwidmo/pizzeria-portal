import React from 'react';
import MaterialTable from 'material-table';
const productsMenu = ['Pizza', 'Lasagne', 'Cola', 'Vodka'];
export default function WaiterOrderNew() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Table', field: 'Table', type: 'numeric'},
      {title: 'Menu', field: 'productsMenu', lookup: {0: productsMenu[0], 1: productsMenu[1], 2: productsMenu[2]}},
      {title: 'Options', field: 'Options'},
      {title: 'Amount', field: 'Amount', type: 'numeric'},
    ],
  });
  return (
    <MaterialTable
      title='New Order'
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
