import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}
export default compose(
  connect(mapStateToProps,
    {
      addMessage: addMessage,
      updateNewMessageText: updateNewMessageText,
    }),
  WithAuthRedirect
)(Dialogs)

