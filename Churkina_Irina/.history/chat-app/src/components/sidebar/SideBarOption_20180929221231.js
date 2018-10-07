import React, { Component } from "react";

export default class SideBarOption extends Component {
  render() {
    return (
      <div
        key={chat.id}
        className={`user ${classNames}`}
        onClick={() => {
          setActiveChat(chat);
        }}
      >
        <div className="user-photo">{chatSideName[0].toUpperCase()}</div>
        <div className="user-info">
          <div className="name">{chatSideName}</div>
          {lastMessage && (
            <div className="last-message">{lastMessage.message}</div>
          )}
        </div>
      </div>
    );
  }
}
