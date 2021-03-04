import React, { useState } from 'react';

import './GameWrap.scss';

function GameWrap({ user }) {
  const [value, setValue] = useState('');
  const [valueComp, setValueComp] = useState('');
  const [points, setPoints] = useState(0);
  const [pointsComp, setPointsComp] = useState(0);
  const [winner, setWinner] = useState('');

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
    } else if (
      (valueC === 'Kamień' && value === 'Nożyczki') ||
      (valueC === 'Nożyczki' && value === 'Papier') ||
      (valueC === 'Papier' && value === 'Kamień')
    ) {
      winnerIs = computer;
    }

    if (user === winnerIs) {
      setPoints(points + 1);
      setWinner(`tą partię wygrał ${user}`);
    } else if (computer === winnerIs) {
      setPointsComp(pointsComp + 1);
      setWinner(`tą partię wygrał ${computer}`);
    }
  };

  const getValueHandler = (e) => {
    setValue(e.target.value);
    getValueComputer();
    checkRoundWinner(e);
  };

  return (
    <div className='game-wrap'>
      <div className='btn__box'>
        <button
          className='btn__choice'
          value={'Kamień'}
          onClick={getValueHandler}>
          Kamień
        </button>
        <button
          className='btn__choice'
          value={'Papier'}
          onClick={getValueHandler}>
          Papier
        </button>
        <button
          className='btn__choice'
          value={'Nożyczki'}
          onClick={getValueHandler}>
          Nożyczki
        </button>
      </div>
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
      <small>{winner}</small>
    </div>
  );
}

export default GameWrap;
