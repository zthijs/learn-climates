import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { World } from './components/World'
import {
  Route,
  Routes
} from "react-router-dom";
import Main from './components/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main />
  )
}

export default App
