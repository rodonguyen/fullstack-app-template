import CONSTANTS from '../../constants/index.ts'
import axiosInstance from '../AxiosInstance.ts'

const UserLogin = async (username: string, password: string) => {
	return axiosInstance
		.post(CONSTANTS.LOGIN_URL, { username, password })
		.then((res) => {
			return res.data
		})
		.catch((err: any) => {
			console.error(err)
		})
}

export default UserLogin
