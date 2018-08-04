import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: `http://142.93.90.106:5000/v1/`,
	})
}