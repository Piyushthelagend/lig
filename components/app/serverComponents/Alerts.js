
import React from 'react'

const Alerts = ({children}) => {
  return (
    <div className="alert alert-danger fade show" role="alert">
       
  <strong style={{color:"#ba2c2c"}}> <i className="bx bx-Error bx-md bx-tada"></i>Error! </strong>{ children}
</div>
  )
}

export default Alerts
