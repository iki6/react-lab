import React, { Component } from "react";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from "./LoginForm";
import ChatContainer from "../containers/ChatContainer";

const socketURL = "http://192.168.0.109:3231";
export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketURL);
    socket.on("connect", () => {
      console.log("connected");
    });
	this.setState({ socket });
  };

  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  logout = user => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
	const { socket, user } = this.state;
	const { onCreateUser } = this.props;
    return (
      <div className="container">
        {!user ? (
          <LoginForm socket={socket} setUser={this.setUser} onCreateUser={onCreateUser} />
        ) : (
          <ChatContainer socket={socket} user={user} logout={this.logout} />
        )}
      </div>
    );
  }
}
