import React from 'react';
import './CategoryButton.scss';

export default function CategoryButtons({ info, title, goToCategory }) {
  return (
    <button
      className="navElement2"
      onClick={() => {
        goToCategory(`${info.id - 1}`);
      }}
    >
      {info.category}
    </button>
  );
}
