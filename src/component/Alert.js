import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} fade show`} role="alert">
      <strong>{`${props.alert.title}: `}</strong>{`${props.alert.msg}`}
    </div>
  )
}

export default Alert
