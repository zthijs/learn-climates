import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';


createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
