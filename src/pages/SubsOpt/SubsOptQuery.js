import React from 'react';

function SubsOptQuery({ questions }) {
  const { queryMain, querySub } = questions;
  return (
    <div className="subsOptQuery">
      <p className="queryMain">{queryMain}</p>
      <p className="querySub">{querySub}</p>
    </div>
  );
}

export default SubsOptQuery;
