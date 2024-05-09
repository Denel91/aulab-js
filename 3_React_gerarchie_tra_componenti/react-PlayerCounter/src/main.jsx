import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
//import Application from "@/Application.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </NextUIProvider>
)
