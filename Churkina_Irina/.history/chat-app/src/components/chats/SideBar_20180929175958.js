import React, { Component } from "react";
// import FaChevronDown from "react-icons/md";
import "react-icons/fa";
// import FaSearch from "react-icons/fa";
// import MdEject from "react-icons/md";

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiver: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault;
    const { receiver } = this.state;
    console.log(receiver);
  };

  render() {
    const { chats, activeChat, user, setActiveChat, logout } = this.props;
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
            debugger;
            if (chat.name) {
              const lastMessage = chat.messages[chat.messages.length - 1];
              const user = chat.users.find(({ name }) => {
                return name !== this.props.name;
              }) || { name: "Community" };
              const classNames =
                activeChat && activeChat.id === chat.id ? "active" : "";

              return (
                <div
                  key={chat.id}
                  className={`user ${classNames}`}
                  onClick={() => {
                    setActiveChat(chat);
                  }}
                >
                  <div className="user-photo">{user.name[0].toUpperCase()}</div>
                  <div className="user-info">
                    <div className="name">{user.name}</div>
                    {lastMessage && (
                      <div className="last-message">{lastMessage.message}</div>
                    )}
                  </div>
                </div>
              );
            }

            return null;
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
