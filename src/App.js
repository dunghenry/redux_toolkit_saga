import React from 'react'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState(2)
  React.useEffect(() => {
    dispatch({ type: 'user/getUsersStart' })
  }, [])
  const handleClick = () => {
    dispatch({ type: 'user/getUserStart', payload: id })
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Get User</button>
    </div>
  )
}

export default App