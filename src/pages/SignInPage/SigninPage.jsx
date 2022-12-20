import React, { useState, useEffect } from 'react';
import './SigninPage.css';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

// class SigninPage extends React.Component {
//   state = {
//     username: '',
//     password: '',
//     loggedin: null,
//     token: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     fetch('https://dummy-video-api.onrender.com/auth/login', {
//       method: 'POST',
//       body: JSON.stringify({
//         username: this.state.username,
//         password: this.state.password,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.token) {
//           localStorage.setItem('token', result.token);
//           this.setState({ loggedin: true });
//           this.setState({ token: result.token });
//         } else {
//           this.setState({ loggedin: false });
//         }
//       });
//   }

//   render() {
//     const { username, password, loggedin } = this.state;

//     return (
//       <div className='App'>
//         <LoginForm
//           user={(username, password)}
//           handleSubmit={this.handleSubmit}
//           handleChange={this.handleChange}
//           loggedin={loggedin}
//         />
//         {loggedin && <Navigate to='/content' />}
//       </div>
//     );
//   }
// }

const SigninPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [loggedin, setLoggedin] = useState(null);
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      fetch('https://dummy-video-api.onrender.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            setLoggedin(true);
            setToken(data.token);
          } else {
            loggedin(false);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setLoading(false);
        });
    }, []);
  };

  return (
    <div className='App'>
      <LoginForm
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        loggedin={loggedin}
      />
      {loggedin && <Navigate to='/content' />}
    </div>
  );
};

export default SigninPage;
