import { useState } from 'react';

import GameWrap from '../GameWrap/GameWrap';
import './App.scss';

function App() {
  const [user, setUser] = useState('');
  const [isVisibility, setIsVisibility] = useState(false);

  const updateName = (e) => {
    setUser(e.target.value);
  };

  const addName = () => {
    // console.log('jest', name);
    setUser(user);
    setIsVisibility(true);
  };

  return (
    <div className='app'>
      <h1 className='app__header'>Witaj w grze</h1>
      <h3 className='app__subheader'>kamień papier nożyce</h3>
      {isVisibility === false ? (
        <div className='user-wrap'>
          <p className='user__desc'>
            Aby rozpocząć grę podaj swoją nazwę użytkownika
          </p>
          <input
            value={user}
            onChange={updateName}
            onKeyDown={(e) => e.key === 'Enter' && addName()}
            className='user__input'
            type='text'
            placeholder='Podaj nazwę gracz'
          />
          <button className='user__btn' onClick={addName}>
            Zatwierdź gracza
          </button>
        </div>
      ) : null}

      {isVisibility === true ? <GameWrap user={user} /> : null}
    </div>
  );
}

export default App;
