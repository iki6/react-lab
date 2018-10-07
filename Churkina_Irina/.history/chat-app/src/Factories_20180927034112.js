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

const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}