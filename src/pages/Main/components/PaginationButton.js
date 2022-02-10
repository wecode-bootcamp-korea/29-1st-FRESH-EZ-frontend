import React from 'react';
import './PaginationButton.scss';

function PaginationButton({ updateOffset }) {
  return (
    <div className="paginationButton2">
      <div className="btn" onClick={() => updateOffset(0)}>
        1
      </div>
      <div className="btn" onClick={() => updateOffset(1)}>
        2
      </div>
      <div className="btn" onClick={() => updateOffset(2)}>
        3
      </div>
      <div className="btn" onClick={() => updateOffset(3)}>
        4
      </div>
      <div className="btn" onClick={() => updateOffset(4)}>
        5
      </div>
    </div>
  );
}

export default PaginationButton;
