import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SignInPage/SigninPage';
import ContentPage from './pages/ContentPage/ContentPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='*' element={<p>PAGE WAS NOT FOUND</p>}></Route>
          <Route path='/content' element={<ContentPage />}></Route>
          <Route path='/content/:id' element={<SingleMoviePage />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
