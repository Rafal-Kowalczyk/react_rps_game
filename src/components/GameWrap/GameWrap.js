import React, { useEffect, useState } from 'react';
import ChoiceButtons from './ChoiceButtons/ChoiceButtons';

import './GameWrap.scss';

function GameWrap({ user }) {
  const [value, setValue] = useState('');
  const [valueComp, setValueComp] = useState('');
  const [points, setPoints] = useState(0);
  const [pointsComp, setPointsComp] = useState(0);
  const [winner, setWinner] = useState('');
  const [endRound, setEndRound] = useState(true);

  const computer = 'Computer';
  const computerChoice = ['Kamień', 'Papier', 'Nożyczki'];

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
      (valueC === 'Kamień' && value === 'Nożyczki') ||
      (valueC === 'Nożyczki' && value === 'Papier') ||
      (valueC === 'Papier' && value === 'Kamień')
    ) {
      winnerIs = computer;
    }

    if (user === winnerIs) {
      setPoints(points + 1);
      // setWinner(`tą partię wygrał ${user}`);
    } else if (computer === winnerIs) {
      setPointsComp(pointsComp + 1);
      // setWinner(`tą partię wygrał ${computer}`);
    }
  };
  console.log(points, pointsComp);

  const endFunc = () => {
    if (points === 3) {
      setWinner(`Grę wygrał ${user}`);
      setEndRound(false);
    } else if (pointsComp === 3) {
      setWinner(`Grę wygrał ${computer}`);
      setEndRound(false);
    }
    console.log(points, pointsComp, 'dd');
  };

  useEffect(() => {
    endFunc();
  });

  const getValueHandler = (e) => {
    setValue(e.target.value);
    getValueComputer();
    checkRoundWinner(e);
  };

  const returnGameHandler = () => {
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
          <ChoiceButtons value={value} getValue={() => getValueHandler} />

          <div className='game__area'>
            <div className='user__box'>
              <div className='user'>{user}</div>
              <div className='choice'>{value}</div>
              <div className='points'>{points}</div>
            </div>
            <span>VS</span>
            <div className='user__box'>
              <div className='user'>{computer}</div>
              <div className='choice'>{valueComp}</div>
              <div className='points'>{pointsComp}</div>
            </div>
          </div>
          {/* <small>{winner}</small> */}
        </>
      ) : (
        <div>
          <p>{winner}</p>
          <button onClick={returnGameHandler}>koniec</button>
        </div>
      )}
    </div>
  );
}

export default GameWrap;
