import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import './SingleMoviePage.css';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';
import SingleMovie from '../../components/atoms/SingleMovie/SingleMovie';
import Modal from '../../components/atoms/Modal/Modal';
import content from '../../content';
import * as contentSelector from '../../content/selectors';
import * as authSelector from '../../auth/selectors';

const SingleMoviePage = ({ token }) => {
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(true);
  const contentState = useSelector(contentSelector.content);
  const authState = useSelector(authSelector.auth);
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    fetch(`https://dummy-video-api.onrender.com/content/items/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // prettier-ignore
        'Authorization': authState.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Access denied!') {
          setHasAccess(false);
        } else {
          setMovie(result);
        }
      });
  }, []);

  const handleModal = (e) => {
    if (e.target.textContent === 'Watch') setOpenModal(true);
    if (openModal) setOpenModal(false);
  };

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main' onClick={handleModal}>
        {movie && (
          <SingleMovie
            inFavorites={contentState.favorites.includes(movie.id)}
            addToFavorite={() =>
              dispatch(content.actions.addFavorite(movie.id))
            }
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        )}
        <Modal open={openModal} src={movie.video} handleModal={handleModal} />
        {!hasAccess && <Navigate to='/' />}
      </main>
      <Footer />
    </div>
  );
};

export default SingleMoviePage;
