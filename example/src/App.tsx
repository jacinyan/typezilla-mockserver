import { useEffect } from 'react'
import { DevTools } from 'typezilla-mockserver'

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {
  useEffect(() => {
    window.fetch(`${apiUrl}/projects`)
  }, [])
  return <DevTools />
}
//
export default App
