import CONSTANTS from '../../constants/index.ts'
import axiosInstance from '../AxiosInstance.ts'

const UserLogin = async () => {
	return axiosInstance
		.get(CONSTANTS.AUTHED_ENDPOINT)
		.then((res) => {
			return res.data
		})
		.catch((err: any) => {
			console.error(err)
		})
}

export default UserLogin
