import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ListElement from './Components/ListElement';
import Create from './Components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameList from './Components/NameList';
import FormName from './Components/FormName';
import Book from './Components/book-components/Book';
import CreateBook from './Components/book-components/CreateBook';
import EditBook from './Components/book-components/EditBook';
import Todo from './Components/TodoList';  
import AddTodoList from './Components/AddTodoList';
import Post from './Components/Posts';

// RTL language setup
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/AddTodoList" element={<AddTodoList />} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<ListElement />} />
          <Route path="/blogs" element={<NameList />} />
          <Route path="/nameForm" element={<FormName />} />
          <Route path="/book" element={<Book />} />
          <Route path="/new-book" element={<CreateBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
