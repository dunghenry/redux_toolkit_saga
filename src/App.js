import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsersStart } from './store/slices/userSlice';
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() =>{
    dispatch(getUsersStart())
  }, [])
  return (
    <div>App</div>
  )
}

export default App