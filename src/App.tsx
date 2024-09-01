import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { BaseLayout } from './components/layout-components/BaseLayout'
import Auth from './pages/auth/Auth'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/p/*' element={<BaseLayout />}></Route>
          <Route path='/auth/' element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
