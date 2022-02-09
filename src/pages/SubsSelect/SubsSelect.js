import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function SubsSelect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/SUBS_CATEGORY.json')
      .then(res => res.json())
      .then(res => setData(res));
  });
  return (
    <div>
      {data.map(data => {
        return <Button key={data.id} data={data} />;
      })}
    </div>
  );
}
