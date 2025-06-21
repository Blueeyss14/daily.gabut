import RightPages from "./pages/RightPages"
import Sidebar from "./components/Sidebar"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='h-screen w-screen flex items-center'>
        <Sidebar />
        <RightPages />
      </div>
    </BrowserRouter>
  )
}

export default App
