import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'


function App() {
  return (
    <>
    <div className='h-screen w-full '>
    <Header/>
    <Page1/> 
    <Page2/>
    <Page3/>
    <Page4/>
    </div>
  
  
      </>
  )
}

export default App 