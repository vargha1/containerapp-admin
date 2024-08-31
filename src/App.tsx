import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { BaseLayout } from './components/layout-components/BaseLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<BaseLayout />}></Route>
          {/* <Route path='/p/' element={<BaseLayout />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
