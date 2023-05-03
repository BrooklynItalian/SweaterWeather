import React, { useState } from 'react';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (token.accessToken) {
      setToken(token.accessToken);
      localStorage.setItem('token', token.accessToken);
      setLoginStatus(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  }

  return(
    <div className="login-wrapper">
      {loginStatus && <p>User logged in successfully</p>} {/* display message when loginStatus is true */}
      {loginError && <p>Login not successful</p>} {/* display login error message */}
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState }from 'react';
// import PropTypes from 'prop-types';
// import './login.css';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }
 
 
// const Login = ({ setToken }) => {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)}/>
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)}/>
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };


// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

// export default Login;