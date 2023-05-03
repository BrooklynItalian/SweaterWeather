import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/api/auth/signup', {
      username: username,
      email: email,
      zip: zip,
      password: password,
      role: role
    })
    .then((response) => {
      setMessage(response.data.message);
      setUsername('');
      setEmail('');
      setZip('');
      setPassword('');
      setRole('user');
    })
    .catch((error) => {
      setMessage(error.response.data.message);
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="number" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default Signup;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// function SignUp() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [zip, setZip] = useState(0);
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const history = useHistory();

//   const handleSubmit = async e => {
//     e.preventDefault();

//     const user = {
//       username,
//       email,
//       zip,
//       password,
//       role
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/signup', user);
//       console.log(response);
//       history.push('/login');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>

//       <div>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
//       </div>

//       <div>
//         <label htmlFor="zip">Zip Code</label>
//         <input type="number" id="zip" value={zip} onChange={e => setZip(e.target.value)} />
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
//       </div>

//       <div>
//         <label htmlFor="role">Role</label>
//         <select id="role" value={role} onChange={e => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="moderator">Moderator</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;

// import React from 'react';

// const SignUp = () => {
//   return (
    
//     <div className="container mt-5">
//       <style> {`.form-label {
//       font-weight: bold;
//     }
    
//     .form-control:focus {
//       border-color: #528ceb;
//       box-shadow: none;
//     }
    
//     .btn-primary {
//       background-color: #528ceb;
//       border: none;
//     }
//     .btn-primary:hover {
//       background-color: #4d4dff;
//     }
    
//     `}</style>
//       <h1>Hey new user, fill out the form below</h1>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="Username" className="form-label">
//             UserName
//           </label>
//           <input type="text" className="form-control" id="firstName" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">
//             Last Name
//           </label>
//           <input type="text" className="form-control" id="lastName" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="sex" className="form-label">
//             Sex
//           </label>
//           <select className="form-select" id="sex">
//             <option value="">--Select One--</option>
//             <option value="M">Male</option>
//             <option value="F">Female</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="size" className="form-label">
//             Size
//           </label>
//           <select className="form-select" id="size">
//             <option value="">--Select One--</option>
//             <option value="S">Small</option>
//             <option value="M">Medium</option>
//             <option value="L">Large</option>
//             <option value="XL">Extra Large</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lifestyle" className="form-label">
//             Lifestyle
//           </label>
//           <select className="form-select" id="lifestyle">
//             <option value="">--Select One--</option>
//             <option value="Fit">Fit</option>
//             <option value="Busy">Busy</option>
//             <option value="Relaxed">Relaxed</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="city" className="form-label">
//             City
//           </label>
//           <input type="text" className="form-control" id="city" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input type="password" className="form-control" id="password" />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;