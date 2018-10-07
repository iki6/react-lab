import { connect } from "react-redux";
import { addUser } from "../Actions";
import LoginForm from "../components/LoginForm";

const mapStateToProps = (state, ownProp) => {
  return {
    existingUsers: state.existingUsers
  };
};

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    onCreateUser: userId => {
      dispatch(addUser(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
