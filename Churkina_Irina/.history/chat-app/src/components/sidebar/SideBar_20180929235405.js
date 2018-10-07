import React, { Component } from "react";
// import FaChevronDown from "react-icons/md";
import "react-icons/fa";
// import FaSearch from "react-icons/fa";
// import MdEject from "react-icons/md";
import { SideBarOption } from "./SideBarOption";
import { get, last, differenceBy } from "lodash";
import { createChatNameFromUsers } from "../../Factories";

export default class SideBar extends Component {
  static type = {
    CHATS: "chats",
    USERS: "users"
  };

  constructor(props) {
    super(props);

    this.state = {
      receiver: "",
      activeSideBar: SideBar.type.CHATS
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { receiver } = this.state;
    const { onSendPrivateMessage } = this.props;

    onSendPrivateMessage(receiver);
    this.setState({ receiver: "" });
  };

  addChatForUser = username => {
    this.setActiveSideBar(SideBar.type.CHATS);
    this.props.onSendPrivateMessage(username);
  };

  setActiveSideBar = newSidebar => {
    this.setState({ activeSideBar: newSidebar });
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
    const { receiver, activeSideBar } = this.state;
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
        <div className="side-bar-select">
          <div
            className={`side-bar-select__option ${
              activeSideBar === SideBar.type.CHATS ? "active" : ""
            }`}
            onClick={() => {
              this.setActiveSideBar(SideBar.type.CHATS);
            }}
          >
            <span>Chats</span>
          </div>
          <div
            className={`side-bar-select__option ${
              activeSideBar === SideBar.type.USERS ? "active" : ""
            }`}
            onClick={() => {
              this.setActiveSideBar(SideBar.type.USERS);
            }}
          >
            <span>Users</span>
          </div>
        </div>
        <div
          className="users"
          ref="users"
          onClick={e => {
            e.target === this.refs.user && setActiveChat(null);
          }}
        >
          {activeSideBar === SideBar.type.CHATS
            ? chats.map(chat => {
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
              })
            : differenceBy(users, [user], "name").map(otherUser => {
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
