import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    {/* Common Layout */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
