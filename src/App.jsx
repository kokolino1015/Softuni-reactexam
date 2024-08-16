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
import { AuthContextProvider } from './contexts/AuthContext'
import MovieDetails from './components/movieDetails/MovieDetails'
import RouteGuard from './components/common/RouteGuard'
import EditMovie from './components/editMovie/EditMovie'
import Logout from './components/logout/Logout'

function App() {

  return (
    <AuthContextProvider>
      <div id="box">
        <main id="main-content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route element={<RouteGuard />}>
              <Route path='/movie/create' element={<CreateMovie />} />
              <Route path="/movie/:movieId/edit" element={<EditMovie />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path='/movie/:movieId/details' element={<MovieDetails />} />
            <Route path='/movie/list' element={<MovieList />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  )
}

export default App
