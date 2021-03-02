import { useEffect, useState } from 'react';
import UserLog from '../UserLog/UserLog';
import GameWrap from '../GameWrap/GameWrap';
import './App.scss';

function App() {
  const [user, setUser] = useState('');
  const [isVisibility, setIsVisibility] = useState(false);

  // const inputRef = useRef();

  // const updateName = (e) => {
  //   setUser(e.target.value);
  // };

  // const addName = () => {
  //   setUser(user);
  //   setIsVisibility(true);
  // };

  // const focusInput = () => {
  //   inputRef.current.focus();
  // };

  // useEffect(() => {
  //   focusInput();
  // }, []);

  return (
    <div className='app'>
      <h1 className='app__header'>Witaj w grze</h1>
      <h3 className='app__subheader'>kamień papier nożyce</h3>
      {isVisibility === false ? (
        <UserLog
          user={user}
          setUser={setUser}
          setIsVisibility={setIsVisibility}
        />
      ) : (
        <GameWrap user={user} />
      )}
    </div>
  );
}

export default App;
