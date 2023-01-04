import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SignInPage/SigninPage';
import ContentPage from './pages/ContentPage/ContentPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import { Provider } from 'react-redux';
import store from '../src/state/';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/content' element={<ContentPage />}></Route>
        <Route path='/content/:id' element={<SingleMoviePage />}></Route>
        <Route path='*' element={<p>PAGE WAS NOT FOUND</p>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
