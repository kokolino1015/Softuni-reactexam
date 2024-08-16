import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateMovie from './components/createMovie/CreateMovie'
import MovieList from './components/movieList/MovieList'
// import CreateComment from './components/commentCreate/CommentCreate'
import { useState } from 'react'
import { AuthContext } from './contexts/AuthContext'
import MovieDetails from './components/movieDetails/MovieDetails'

function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  }
  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }
  return (
    <AuthContext.Provider value={contextData }>
      <div id="box">
        <main id="main-content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/movie/create' element={<CreateMovie />} />
            <Route path='/movie/:movieId/details' element={<MovieDetails />} />
            <Route path='/movie/list' element={<MovieList />} />
            {/* <Route path='/movie/:movieId/comment' element={<CreateComment />} /> */}
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  )
}

export default App
