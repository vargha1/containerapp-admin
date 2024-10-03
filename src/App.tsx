import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { BaseLayout } from './components/layout-components/BaseLayout'
import Auth from './pages/auth/Auth'
import { useEffect, useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState("");
  useEffect(() => {
    if (isLogged != "") {
      localStorage.setItem("loginStatus", isLogged)
    }
  }, [isLogged])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<BaseLayout isLogged={isLogged} setIsLogged={setIsLogged} />}></Route>
          <Route path='/auth/*' element={<Auth setIsLogged={setIsLogged} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
