import './index.css'

import ReactDOM from 'react-dom'
import App from './App'

import { loadServer } from 'typezilla-mockserver'

loadServer(() => ReactDOM.render(<App />, document.getElementById('root')))
