import { useEffect } from 'react'

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {
  useEffect(() => {
    window.fetch(`${apiUrl}/projects`)
  }, [])
  return <h1>Hello!</h1>
}

export default App
