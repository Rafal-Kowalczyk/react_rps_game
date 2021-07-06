import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

import './ChoiceButtons.scss';

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
    value: 'Nożyce',
    img: <FaHandScissors />,
  },
];

function ChoiceButtons({ getValue }) {
  const buttonItem = dataButton.map((item) => (
    <button
      className='btn__choice'
      key={item.id}
      value={item.value}
      onClick={getValue()}>
      {item.img}
      {item.value}
    </button>
  ));

  return <div className='btn__box'>{buttonItem}</div>;
}

export default ChoiceButtons;
