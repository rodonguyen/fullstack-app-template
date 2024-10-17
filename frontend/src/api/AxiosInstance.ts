import axios from 'axios'

export default axios.create({
	baseURL: 'http://localhost:3333/api/',
	timeout: 1000,
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}
})
