import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import InputBox from '../InputBox';

const useStyles = makeStyles({
  '@global': {
    [['html', 'body']]: {
      height: '100%',
    },
    body: {
      margin: 0,
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    'path:hover': {
      fill: '#cccccc',
    },
  },
});

const App = () => {
  useStyles();

  let [circles, setCircles] = useState(3);
  circles = Math.max(0, circles);

  const handleChange = value => {
    setCircles(+value);
  };

  const quadrantWidth = 50;

  const viewBox = circles * quadrantWidth * 2 + quadrantWidth * 2;
  const center = viewBox / 2;

  return (
    <>
      <InputBox value={circles} handleChange={handleChange} />
      <svg viewBox={`0 0 ${viewBox} ${viewBox}`} width={viewBox + 300} height={viewBox + 300} fill="black" stroke="red">
        {Array(circles).fill().map((_, i) => {
          const firstCurvePosition = quadrantWidth * 2 + i * quadrantWidth;
          const secondCurvePosition = quadrantWidth + i * quadrantWidth;

          return (
            <React.Fragment key={i}>
              <path d={`M ${center} ${center} m 0 -${firstCurvePosition} q  ${firstCurvePosition} 0  ${firstCurvePosition}  ${firstCurvePosition} h -${quadrantWidth} q 0  -${secondCurvePosition}  -${secondCurvePosition}  -${secondCurvePosition} Z`} />
              <path d={`M ${center} ${center} m 0 -${firstCurvePosition} q -${firstCurvePosition} 0 -${firstCurvePosition}  ${firstCurvePosition} h  ${quadrantWidth} q 0  -${secondCurvePosition}   ${secondCurvePosition}  -${secondCurvePosition} Z`} />
              <path d={`M ${center} ${center} m 0  ${firstCurvePosition} q -${firstCurvePosition} 0 -${firstCurvePosition} -${firstCurvePosition} h  ${quadrantWidth} q 0   ${secondCurvePosition}   ${secondCurvePosition}   ${secondCurvePosition} Z`} />
              <path d={`M ${center} ${center} m 0  ${firstCurvePosition} q  ${firstCurvePosition} 0  ${firstCurvePosition} -${firstCurvePosition} h -${quadrantWidth} q 0   ${secondCurvePosition}  -${secondCurvePosition}   ${secondCurvePosition} Z`} />
            </React.Fragment>
          );
        })}
      </svg>
    </>
  );
};

export default App;
