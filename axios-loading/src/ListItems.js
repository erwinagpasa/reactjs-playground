import React from 'react';

function ListItems({userList}) {
  return (
    <div>
      <p>{userList.name} - {userList.email}</p>
    </div>
  );
}

export default ListItems;