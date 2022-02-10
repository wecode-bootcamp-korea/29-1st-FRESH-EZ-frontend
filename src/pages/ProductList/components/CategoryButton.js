import React from 'react';
import './CategoryButton.scss';

export default function CategoryButtons({ info, title, goToCategory }) {
  return (
    <button
      className={title === info.category ? 'navElementSelected' : 'navElement'}
      onClick={() => {
        goToCategory(`${info.id - 1}`);
      }}
    >
      {info.category}
    </button>
  );
}
