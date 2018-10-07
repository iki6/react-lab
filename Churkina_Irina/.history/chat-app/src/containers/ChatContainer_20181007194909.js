import { connect } from "react-redux";
import { addMsg } from "../../Actions";
import ChatContainer from "../components/chats/ChatContainer";

mapStateToProps = (state, prop) => {
  return {
    chats: this.state.chats
  };
};

mapDispatchToProps = dispatch => {
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
