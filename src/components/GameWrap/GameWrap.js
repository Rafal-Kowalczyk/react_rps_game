import React, { useEffect, useState } from 'react';
import ChoiceButtons from './ChoiceButtons/ChoiceButtons';
import GameArea from './GameArea/GameArea';

import './GameWrap.scss';

function GameWrap({ user }) {
  const [value, setValue] = useState('');
  const [valueComp, setValueComp] = useState('');
  const [points, setPoints] = useState(0);
  const [pointsComp, setPointsComp] = useState(0);
  const [winner, setWinner] = useState('');
  const [endRound, setEndRound] = useState(true);

  const computer = 'Computer';
  const computerChoice = ['Kamień', 'Papier', 'Nożyce'];

  let valueC = computerChoice[Math.floor(Math.random() * 3)];

  const getValueComputer = () => {
    setValueComp(valueC);
  };

  const checkRoundWinner = (e) => {
    let winnerIs = user;
    let value = e.target.value;

    if (value === valueC) {
      winnerIs = 0;
      setWinner('');
    } else if (
      (valueC === 'Kamień' && value === 'Nożyce') ||
      (valueC === 'Nożyce' && value === 'Papier') ||
      (valueC === 'Papier' && value === 'Kamień')
    ) {
      winnerIs = computer;
    }

    if (user === winnerIs) {
      setPoints(points + 1);
    } else if (computer === winnerIs) {
      setPointsComp(pointsComp + 1);
    }
  };

  const getValueHandler = (e) => {
    setValue(e.target.value);
    getValueComputer();
    checkRoundWinner(e);
  };

  const endFunc = () => {
    if (points === 10) {
      setWinner(`Grę wygrał ${user}`);
      setTimeout(() => {
        setEndRound(false);
      }, 2000);
    } else if (pointsComp === 10) {
      setWinner(`Grę wygrał ${computer}`);
      setTimeout(() => {
        setEndRound(false);
      }, 2000);
    }
  };

  useEffect(() => {
    endFunc();
    return () => {
      setEndRound(true);
    }; // eslint-disable-next-line
  }, [points, pointsComp]);

  const returnGameHandler = () => {
    setWinner('');
    setEndRound(true);
    setValue('');
    setValueComp('');
    setPoints(0);
    setPointsComp(0);
  };

  return (
    <div className='game-wrap'>
      {endRound ? (
        <>
          {winner === '' ? (
            <ChoiceButtons value={value} getValue={() => getValueHandler} />
          ) : null}
          <GameArea
            user={user}
            value={value}
            points={points}
            comp={computer}
            valueComp={valueComp}
            pointsComp={pointsComp}
          />
          <p>{winner}</p>
        </>
      ) : (
        <>
          <button onClick={returnGameHandler}>Zagraj raz jeszcze</button>
        </>
      )}
    </div>
  );
}

export default GameWrap;
