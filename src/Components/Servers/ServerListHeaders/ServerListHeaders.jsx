import React, { useRef } from 'react';
import {useDispatch} from "react-redux";
import {sortDataAction} from "../../../Store/Actions/ServersActions";

function ServerListHeaders() {
  const dispatch = useDispatch();
  let directions = useRef(false);

  const headersMap = [
    { name: 'Name', value: 'name' },
    { name: 'Distance', value: 'distance' },
  ]

  const sortList = (header) => {
    directions.current = !directions.current;
    let direction = directions.current ? 'asc' : 'desc';
    dispatch(sortDataAction(header, direction));
  }

  const renderHeaders = headersMap?.map((header, index) => {
      return (
        <span
          key={ index }
          onClick={ () => sortList(header.value) }
          className="Server-list__header cp fw-600 fs-medium position-r"
        >{ header.name }</span>
      )
    })

  return (
    <>
      <div className="Server-row__container flex space-between">
        { renderHeaders }
      </div>
    </>
  );
}

export default ServerListHeaders;