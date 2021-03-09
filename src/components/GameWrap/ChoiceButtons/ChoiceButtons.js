import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const dataButton = [
  {
    id: 1,
    value: 'Kamień',
    img: <FaHandRock />,
  },
  {
    id: 2,
    value: 'Papier',
    img: <FaHandPaper />,
  },
  {
    id: 3,
    value: 'Nożyczki',
    img: <FaHandScissors />,
  },
];

function ChoiceButtons({ getValue }) {
  const buttonItem = dataButton.map((item) => (
    <>
      <button
        className='btn__choice'
        key={item.id}
        value={item.value}
        onClick={getValue()}>
        <div>{item.img}</div>
        {item.value}
      </button>
    </>
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
