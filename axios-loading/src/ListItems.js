import React from 'react';

function ListItems({studentList}) {
  return (
    <div>
      <p>{studentList.name} - {studentList.email}</p>
    </div>
  );
}

export default ListItems;