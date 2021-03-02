import React, { useState } from 'react';

import './GameWrap.scss';

function GameWrap({ user }) {
  const [value, setValue] = useState('');
  const [valueComp, setValueComp] = useState('');

  const computerChoice = ['Kamień', 'Papier', 'Nożyczki'];

  const getValuComputer = () => {
    setValueComp(computerChoice[Math.floor(Math.random() * 3)]);
  };

  const getValueHandler = (e) => {
    setValue(e.target.value);
    getValuComputer();
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
          <div className='points'>0</div>
        </div>
        <span>VS</span>
        <div className='user__box'>
          <div className='user'>Computer</div>
          <div className='choice'>{valueComp}</div>
          <div className='points'>0</div>
        </div>
      </div>
    </div>
  );
}

export default GameWrap;
