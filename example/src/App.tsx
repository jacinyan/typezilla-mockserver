import { useEffect } from 'react'
import { ExampleComponent } from 'typezilla-mockserver'
import 'typezilla-mockserver/dist/index.css'

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {
  useEffect(() => {
    window.fetch(`${apiUrl}/projects`)
  }, [])
  return <ExampleComponent text='Create React Library Example 😄' />
}
//
export default App
