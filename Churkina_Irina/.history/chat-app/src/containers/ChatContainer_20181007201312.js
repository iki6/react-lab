import { connect } from "react-redux";
import { addMsg } from "../Actions";
import ChatContainer from "../components/chats/ChatContainer";

const mapStateToProps = (state, prop) => {
  return {
    chats: state.chats
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onMessageSent: msg => {
      dispatch(addMsg(msg));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
