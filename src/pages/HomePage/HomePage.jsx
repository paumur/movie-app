import React from 'react';
import './HomePage.css';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';

class HomePage extends React.Component {
  state = {
    data: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const cardId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    this.state.favorites.find((id) => id === cardId)
      ? this.setState({
          favorites: this.state.favorites.filter((id) => id !== cardId),
        })
      : this.setState({ favorites: [...this.state.favorites, cardId] });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const result = await fetch(
        'https://dummy-video-api.onrender.com/content/free-items'
      );

      if (result.status >= 400 && result.status <= 599) {
        this.setState({ error: true });
      } else {
        const json = await result.json();
        this.setState({ data: json });
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, error, data, favorites } = this.state;
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));

    return (
      <div className='App'>
        <Header />
        <Hero />
        <main className='main'>
          <div className='cards-container'>
            {loading && <p>Loading...</p>}
            {error && <p>Whoops! Failed to Load!</p>}
            {data &&
              data.map((movie) => (
                <MovieCard
                  addToFavorite={this.handleChange}
                  favorites={favorites}
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                  key={movie.id}
                />
              ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
