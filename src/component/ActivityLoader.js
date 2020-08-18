import React from 'react'
import { CircularProgress } from '@material-ui/core';

const ActivityLoader = () => {
    return (
      <div style={{width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CircularProgress  size={48} color="inherit" />
    </div>
  
    )
}

export default ActivityLoader
