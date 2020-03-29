import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  inputBox: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '16px',
    backgroundColor: '#DEDEDE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  increment: {
    marginBottom: '-20px',
  },
  decrement: {
    transform: 'rotate(180deg)',
  },
  value: {
    margin: '0 32px 0 0',
    fontFamily: 'sans-serif',
    fontSize: '64px',
  },
  controls: {
    '& > div > svg': {
      cursor: 'pointer',
      '&:hover': {
        fill: 'red',
      },
    },
  },
});

const InputBox = ({ value, handleChange }) => {
  const classes = useStyles();

  const increment = () => handleChange(value + 1);
  const decrement = () => handleChange(value - 1);

  return (
    <div className={classes.inputBox}>
      <h1 className={classes.value}>{value}</h1>
      <div className={classes.controls}>
        <div onClick={increment} className={classes.increment}>
          <svg viewBox={'0 0 20 10'} width={'50px'} height={'50px'}>
            <polygon points="0 10 10 0 20 10" />
          </svg>
        </div>
        <div onClick={decrement} className={classes.decrement}>
          <svg viewBox={'0 0 20 10'} width={'50px'} height={'50px'}>
            <polygon points="0 10 10 0 20 10" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
