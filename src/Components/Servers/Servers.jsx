import React from 'react';
import { SERVERS_PAGE_HEADING } from "./serverConstants";
import ServerList from "./ServerList/ServerList";
import Header from "../Header/Header";

function Server() {
  return (
    <>
      <Header/>
      <main className="Servers constraints-md m0a py-2">
        <h2 className="my-2 px">{ SERVERS_PAGE_HEADING }</h2>
        <ServerList/>
      </main>
    </>
  );
}

export default Server;
