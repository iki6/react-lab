import { connect } from "react-redux";
import { addMsg } from "../Actions";
import { addChat } from "../Actions";
import ChatContainer from "../components/chats/ChatContainer";

const mapStateToProps = (state, prop) => {
  return {
    stateChats: state.chats
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onMessageSent: msg => {
      dispatch(addMsg(msg));
    },
    createStateChats: chatId => {
		debugger
      dispatch(addChat(chatId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
