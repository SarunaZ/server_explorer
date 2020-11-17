import React, { useRef, useState } from 'react';
import  {useDispatch } from "react-redux";
import { setSortData } from "../../../Store/Actions/ServersActions";
import { headersMap, SERVERS_SORTING_ASC, SERVERS_SORTING_DESC } from "../serverConstants";

function ServerListHeaders() {
  const dispatch = useDispatch();
  let headerToggle = useRef(false);
  let [sortDirection, setSortDirection] = useState('');

  const sortList = (header) => {
    headerToggle.current = !headerToggle.current;

    setSortDirection(headerToggle.current
      ? SERVERS_SORTING_ASC
      : SERVERS_SORTING_DESC);
    dispatch(setSortData(header, sortDirection));
  }

  const renderHeaders = headersMap?.map((header, index) => {
      return (
        <span
          key={ index }
          onClick={ () => sortList(header.value) }
          data-sort={ sortDirection }
          className="Server-list__header cp fw-600 fs-medium position-r"
        >{ header.name }</span>
      )
    })

  return (
    <>
      <div className="flex space-between">
        { renderHeaders }
      </div>
    </>
  );
}

export default ServerListHeaders;