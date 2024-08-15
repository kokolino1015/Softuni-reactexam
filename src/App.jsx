import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateBook from './components/createBook/CreateBook'
import BookList from './components/bookList/BookList'
import BookDetails from './components/bookDetails/BookDetails'
import CreateComment from './components/commentCreate/CommentCreate'

function App() {
  return (
    <>
      <div id="box">
        <main id="main-content">
          <Header />    
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/book/create' element={<CreateBook />}/>
            <Route path='/book/:bookId' element={<BookDetails />}/>
            <Route path='/book/list' element={<BookList />}/>
            <Route path='/book/:bookId/comment' element={<CreateComment />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
