import React from 'react';

function GameArea({ user, value, points, comp, valueComp, pointsComp }) {
  return (
    <div className='game__area'>
      <div className='user__box'>
        <div className='user'>{user}</div>
        <div className='choice'>{value}</div>
        <div className='points'>{points}</div>
      </div>
      <span>VS</span>
      <div className='user__box'>
        <div className='user'>{comp}</div>
        <div className='choice'>{valueComp}</div>
        <div className='points'>{pointsComp}</div>
      </div>
    </div>
  );
}

export default GameArea;
