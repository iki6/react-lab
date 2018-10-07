import { connect } from "react-redux";
import { addMsg } from "../Actions";
import { addStateUser } from "../Actions";
import ChatContainer from "../components/chats/ChatContainer";

const mapStateToProps = (state, prop) => {
  debugger;
  return {
    stateUsers: state
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onMessageSent: (msg, chatId) => {
      dispatch(addMsg(msg, chatId));
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
