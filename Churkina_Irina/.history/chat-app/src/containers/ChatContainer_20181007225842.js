import { connect } from "react-redux";
import { addMsg } from "../Actions";
import { addStateUser } from "../Actions";
import ChatContainer from "../components/chats/ChatContainer";

const mapStateToProps = (state, prop) => {
  debugger;
  return {
    stateMessages: state
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onMessageSent: (msg, chatId, userName) => {
      dispatch(addMsg(msg, chatId, userName));
    },
    createStateUser: user => {
      dispatch(addStateUser(user));
      debugger;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
