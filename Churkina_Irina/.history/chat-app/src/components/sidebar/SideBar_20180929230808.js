import React, { Component } from "react";
// import FaChevronDown from "react-icons/md";
import "react-icons/fa";
// import FaSearch from "react-icons/fa";
// import MdEject from "react-icons/md";
import { SideBarOption } from "./SideBarOption";
import { get, last, differenceBy } from "lodash";
import { createChatNameFromUsers } from "../../Factories";

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiver: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { receiver } = this.state;
    const { onSendPrivateMessage } = this.props;

    onSendPrivateMessage(receiver);
    this.setState({ receiver: "" });
  };

  render() {
    const {
      chats,
      activeChat,
      user,
      setActiveChat,
      logout,
      users
    } = this.props;
    const { receiver } = this.state;
    return (
      <div id="side-bar">
        <div className="heading">
          <div className="app-name">Chat App</div>
          <div className="menu">Menu</div>
        </div>
        <form onSubmit={this.handleSubmit} className="search">
          <i className="search-icon" />
          <input
            placeholder="Search"
            type="text"
            value={receiver}
            onChange={e => {
              this.setState({ receiver: e.target.value });
            }}
          />
          <div className="plus" />
        </form>
        <div
          className="users"
          ref="users"
          onClick={e => {
            e.target === this.refs.user && setActiveChat(null);
          }}
        >
          {chats.map(chat => {
            if (chat.name) {
              return (
                <SideBarOption
                  key={chat.id}
                  chat={chat}
                  name={
                    chat.isCommunity
                      ? chat.name
                      : createChatNameFromUsers(chat.users, user.name)
                  }
                  lastMessage={get(last(chat.messages), "message", "")}
                  active={activeChat.id === chat.id}
                  onClick={() => {
                    this.props.setActiveChat(chat);
                  }}
                />
              );
            }

            return null;
          })}

          {differenceBy(users, [user], "name").map(otherUser => {
            return (
              <SideBarOption
                key={otherUser.id}
                name={otherUser.name}
                onClick={() => {
                  this.addChatForUser(otherUser.name);
                }}
              />
            );
          })}
        </div>
        <div className="current-user">
          <span>{user.name}</span>
          <div
            onClick={() => {
              logout();
            }}
            title="Logout"
            className="logout"
          >
            Logout
          </div>
        </div>
      </div>
    );
  }
}
