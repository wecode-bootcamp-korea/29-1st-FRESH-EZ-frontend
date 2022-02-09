import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryButton.scss';

export default function CategoryButtons({ info, title }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products?category=${info.id - 1}`);
  };
  console.log(info.id - 1);

  return (
    <button
      className={title === info.category ? 'navElementSelected' : 'navElement'}
      onClick={goToDetail}
    >
      {info.category}
    </button>
  );
}
