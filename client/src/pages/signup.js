import React from 'react';

const SignUp = () => {
  return (
    
    <div className="container mt-5">
      <style> {`.form-label {
      font-weight: bold;
    }
    
    .form-control:focus {
      border-color: #528ceb;
      box-shadow: none;
    }
    
    .btn-primary {
      background-color: #528ceb;
      border: none;
    }
    .btn-primary:hover {
      background-color: #4d4dff;
    }
    
    `}</style>
      <h1>Hey new user, fill out the form below</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="sex" className="form-label">
            Sex
          </label>
          <select className="form-select" id="sex">
            <option value="">--Select One--</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Size
          </label>
          <select className="form-select" id="size">
            <option value="">--Select One--</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="lifestyle" className="form-label">
            Lifestyle
          </label>
          <select className="form-select" id="lifestyle">
            <option value="">--Select One--</option>
            <option value="Fit">Fit</option>
            <option value="Busy">Busy</option>
            <option value="Relaxed">Relaxed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;