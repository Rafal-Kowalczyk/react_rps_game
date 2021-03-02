import { useEffect, useRef } from 'react';

function UserLog({ user, setUser, setIsVisibility }) {
  const inputRef = useRef();

  const updateName = (e) => {
    setUser(e.target.value);
  };

  const addName = () => {
    setUser(user);
    setIsVisibility(true);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);
  return (
    <div className='user-wrap'>
      <p className='user__desc'>
        Aby rozpocząć grę podaj swoją nazwę użytkownika
      </p>
      <input
        ref={inputRef}
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
  );
}

export default UserLog;
