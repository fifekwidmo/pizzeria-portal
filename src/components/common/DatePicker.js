import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function DateAndTimePickers() {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Select booking time"
        type="datetime-local"
        defaultValue="2020-07-02T16:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}