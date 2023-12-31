import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/globals.css';
import { OrderProvider } from '@context/contextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<OrderProvider>
			<App />
		</OrderProvider>
	</React.StrictMode>,
);
