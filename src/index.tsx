import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import './styles/index.scss'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
