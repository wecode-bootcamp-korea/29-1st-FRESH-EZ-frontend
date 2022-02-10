import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ data }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/subsDetails/${data.id}`);
  };
  return <button onClick={goToDetail}>{data.value}</button>;
}
