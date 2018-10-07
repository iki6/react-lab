const uuidv4 = require("uuid/v4");

const createUser = ({ user = "" } = {}) => ({
  id: uuidv4(),
  user
});

const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender
});

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

const createChat = ({
  messages = [],
  name = "Community",
  users = []
} = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: []
});

module.exports = {
	createUser,
	createMessage,
	createChat
}