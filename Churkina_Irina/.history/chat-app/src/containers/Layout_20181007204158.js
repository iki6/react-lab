import { connect } from "react-redux";
import { addMsg } from "../Actions";
import Layout from "../components/Layout";

const mapStateToProps = (state, prop) => {
  return {
    existingUsers: state.existingUsers
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onCreateUser: userId => {
      dispatch(addUser(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
