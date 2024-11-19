import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}
export const DialogsContainer = connect(mapStateToProps,
  {
    addMessage: addMessage,
    updateNewMessageText: updateNewMessageText,
  })(Dialogs)

