import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContex'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TaskPage from './pages/TaskPage'
import HomePage from './pages/HomePage'
import TaskFormPage from './pages/TaskFromPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/navbar'

import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TaskContext'



function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10'>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TaskPage />} />
                <Route path='/add-task' element={<TaskFormPage />} />
                <Route path='/task/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
