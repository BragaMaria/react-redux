import React from "react";


export class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }


  activateEditMode = () => {
    this.setState({
      editMode: true
    })

  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })

    this.props.updateStatus(this.state.status)

  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })

  }


  render() {
    return <div>
      {!this.state.editMode &&
        <span onDoubleClick={this.activateEditMode}>Статус : {this.props.status}</span>
      }

      {this.state.editMode &&
        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
               value={this.state.status}/>
      }


    </div>
  }
}