import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LinkShort from './components/linkshort/linkshort'
import History from './components/history/history'
import './App.css'

function App() {

  return (
    <>
      <div className='app-divBody'>
        <div className='app-grid1'>
          <LinkShort></LinkShort>
        </div>
        <div className='app-grid2'>
          <History></History>
        </div>
      </div>
    </>
  )
}

export default App
