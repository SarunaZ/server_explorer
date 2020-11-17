import React from 'react';
import ServerListRows from "../ServerListRow/ServerRow";
import ServerListHeaders from "../ServerListHeaders/ServerListHeaders";

function ServerList() {
  return (
    <>
      <div className='Server-list m0a b-sizing-border p-2 box-shadow'>
        <ServerListHeaders/>
        <ServerListRows/>
      </div>
    </>
  );
}

export default ServerList;