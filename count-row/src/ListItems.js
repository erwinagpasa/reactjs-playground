import React from 'react';

function ListItems({userList}) {
  return (
    <div>
      <small>ID: {userList.userId} - {userList.title}</small>
    </div>
  );
}

export default ListItems;