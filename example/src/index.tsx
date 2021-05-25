import './index.css'

import ReactDOM from 'react-dom'
import App from './App'

import { loadDevTools } from 'typezilla-mockserver'

loadDevTools(() => ReactDOM.render(<App />, document.getElementById('root')))
