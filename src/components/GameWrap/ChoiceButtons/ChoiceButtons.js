import React from 'react';

const dataButton = [
  {
    id: 1,
    value: 'Kamień',
  },
  {
    id: 2,
    value: 'Papier',
  },
  {
    id: 3,
    value: 'Nożyczki',
  },
];

function ChoiceButtons({ getValue }) {
  const buttonItem = dataButton.map((item) => (
    <button
      className='btn__choice'
      key={item.id}
      value={item.value}
      onClick={getValue()}>
      {item.value}
    </button>
  ));

  return (
    <div className='btn__box'>{buttonItem}</div>

    // <div>
    //   <div className='btn__box'>
    //     <button className='btn__choice' value={'Kamień'} onClick={getValue()}>
    //       Kamień
    //     </button>
    //     <button className='btn__choice' value={'Papier'} onClick={getValue()}>
    //       Papier
    //     </button>
    //     <button className='btn__choice' value={'Nożyczki'} onClick={getValue()}>
    //       Nożyczki
    //     </button>
    //   </div>
    // </div>
  );
}

export default ChoiceButtons;
