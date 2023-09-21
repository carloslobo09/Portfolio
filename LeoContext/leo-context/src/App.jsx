import { useState } from 'react'
import './App.css'
import { UserProviderReducer } from './context/recuder/UserContext'
// import { UserProvider } from './context/User'
import { UserButton } from './pages/UserButton'
import { UserStatus } from './pages/UserStatus'

function App() {
  
  return (
    <>
      <UserProviderReducer>
        <UserStatus/>
        <UserButton/>
      </UserProviderReducer>
    </>
  )
}

export default App
