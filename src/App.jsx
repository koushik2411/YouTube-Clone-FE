import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import VideoPlayer from './pages/VideoPlayer'
import Channel from './pages/Channel'
import CreateChannel from './pages/CreateChannel'
import ProtectedRoute from './components/ProtectedRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='/register' element={<Register/>}/>

        <Route path='/watch/:id' element={<VideoPlayer/>}/>

        <Route path='/channel/:id' element={
          <ProtectedRoute>
            <Channel/>
          </ProtectedRoute>
        }/>

        <Route path='/create-channel' element={
          <ProtectedRoute>
            <CreateChannel/>
          </ProtectedRoute>
        }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App