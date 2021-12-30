import { useState } from 'react';

const GamblingView = () => {
  const [ gameState, setGameState ] = useState([
    { id: 1,
      value: 0
    },
    { id: 2,
      value: 0
    },
    { id: 3,
      value: 0
    }
  ]);

  const onPlayHandler = () => {
    console.log('wow')
    const newGameState = gameState.map( (el) => {
      return {
        ...el,
        value: Math.floor(Math.random() * 10)
      };
    });
    console.log('newGameState', newGameState);
    setGameState(newGameState);
  }

  return (
    <div>
      {gameState.map( (el, index) => (
        <div key={`gambling${index}`}>
          {el.value}
        </div>
      ))}
      <button onClick={() => onPlayHandler()}>Play</button>
    </div>
  )
};

export default GamblingView;