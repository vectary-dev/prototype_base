import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TexturePropertyProvider } from "./context/texturePropertyContext"
import './styles/tailwind.css';

ReactDOM.render(
	<React.StrictMode>
		<TexturePropertyProvider>
			<App />
		</TexturePropertyProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
