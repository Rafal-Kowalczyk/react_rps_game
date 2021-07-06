import { useState } from 'react';
import UserLog from '../UserLog/UserLog';
import GameWrap from '../GameWrap/GameWrap';
import './App.scss';

function App() {
  const [user, setUser] = useState('');
  const [isVisibility, setIsVisibility] = useState(true);

  return (
    <div className='app'>
      <div className='app__wrap'>
        <h1 className='app__header'>Witaj w grze</h1>
        <h4 className='app__subheader'>Kamień Papier Nożyce</h4>
        {isVisibility ? (
          <UserLog
            user={user}
            setUser={setUser}
            setIsVisibility={setIsVisibility}
          />
        ) : (
          <GameWrap user={user} />
        )}
      </div>
    </div>
  );
}

export default App;
