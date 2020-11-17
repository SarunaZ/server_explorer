import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getServerDataAction, setServerData } from "../../../Store/Actions/ServersActions";

function ServerListRows() {
  const dispatch = useDispatch();
  const serverData = useSelector(state => state.serverData?.data);

  useEffect(() => {
    dispatch(getServerDataAction());

    return () => {
      dispatch(setServerData(null));
    }

    // no need to add dispatch to dependency array since it never changes
    // and component needs to dispatch the action only once
    // eslint-disable-next-line
  }, []);


  const renderRow = serverData?.map((row, index) => {
      return (
        <li className="Server-row flex space-between my py fs-regular fw-600" key={index}>
          <span>{ row.name }</span>
          <span>{ row.distance }</span>
        </li>
      )
    })

  return (
    <ul>
      { renderRow }
    </ul>
  );
}

export default ServerListRows;