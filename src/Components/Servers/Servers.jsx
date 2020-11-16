import React from 'react';

import ServerList from "./ServerList/ServerList";
import Header from "../Header/Header";
function Server() {
  return (
    <>
      <Header/>
      <main className="Servers constraints-md m0a py-2">
        <h2 className="my-2">Servers</h2>
        <ServerList/>
      </main>
    </>
  );
}

export default Server;
