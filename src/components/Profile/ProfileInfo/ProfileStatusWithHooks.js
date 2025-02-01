import React, {useState} from "react";


export const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return <div>
    {!editMode &&
      <span onDoubleClick={activateEditMode}>Статус : {props.status}</span>
    }

    {editMode &&
      <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}
      />
    }


  </div>

}