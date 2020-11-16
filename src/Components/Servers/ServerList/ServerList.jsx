import React from 'react';
import ServerListRow from "../ServerListRow/ServerRow";
import ServerListHeaders from "../ServerListHeaders/ServerListHeaders";

function ServerList() {
  return (
    <>
      <div className='Server-list m0a b-sizing-border p-2'>
        <ServerListHeaders/>
        <ServerListRow/>
      </div>
    </>
  );
}

export default ServerList;