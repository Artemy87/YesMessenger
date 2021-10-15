import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator}
    from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: () => dispatch(sendMessageCreator()),
        messageChange: (text) => dispatch(updateNewMessageBodyCreator(text)),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
