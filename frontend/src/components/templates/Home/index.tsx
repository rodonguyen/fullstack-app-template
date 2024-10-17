import React, { useEffect } from 'react'
import apis from '../../../api'

const Home: React.FC = () => {
	useEffect(() => {
		apis.AuthedEndpoint()
	}, [])

	return (
		<div>
			<p className="bg-red-500 text-black">You're on the home page</p>
		</div>
	)
}

export default Home
