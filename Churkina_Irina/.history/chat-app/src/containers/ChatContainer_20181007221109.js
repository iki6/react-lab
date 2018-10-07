import { connect } from "react-redux";
import { addMsg } from "../Actions";
import { addChat } from "../Actions";
import ChatContainer from "../components/chats/ChatContainer";

const mapStateToProps = (state, prop) => {
  return {
    stateChats: state.stateChats
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onMessageSent: msg => {
      dispatch(addMsg(msg));
    },
    createStateChats: chatId => {
      dispatch(addChat(chatId));
		debugger
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
