import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <>
      <Navbar />
      <div className='heroWrapper'>
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate qui ab voluptates voluptate, aspernatur repudiandae voluptatem enim laudantium nam a mollitia magnam tenetur distinctio! Error voluptatem minima possimus sequi */}
        <Sidebar />
      </div>

    </>
  )
}

export default App
