import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  return (
    <>
      <div id="box">
        <main id="main-content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
