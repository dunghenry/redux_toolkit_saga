import React from 'react'
import { useDispatch } from 'react-redux';
import {getUsersStart} from './store/slices/userSlice'
import { createAction } from '@reduxjs/toolkit'
const getUserStart = createAction('user/getUserStart');
const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState(2)
  React.useEffect(() => {
    dispatch(getUsersStart())
  }, [])
  const handleClick = () => {
    dispatch(getUserStart(1))
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Get User</button>
    </div>
  )
}

export default App