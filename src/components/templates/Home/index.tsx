import React, { useEffect } from 'react';
import apis from '../../../api';

const Home = () => {

  useEffect(() => {
    apis.AuthedEndpoint()
  }, [])

  return (
    <div>
      <p>You're on the home page</p>
    </div>
  )
}

export default Home