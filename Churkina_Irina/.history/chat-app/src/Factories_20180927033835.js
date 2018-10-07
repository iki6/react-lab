const uuidv4 = require('uuid/v4');

const createUser = ({user: ""} = {})=>(
	{
		id: uuidv4(),
		user
	}
)

const createMessage = ({message: '', sender: ''} = {})=>({
	id: uuidv4(),
	time: new Date(Date.now()),
	message,
	sender
})