import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById( 'app-root' )!;
const rootAppElement = createRoot( container );

rootAppElement.render(
	<React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
);
