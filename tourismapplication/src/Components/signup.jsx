


import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [role, setRole] = useState('user');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [agencyNameError, setAgencyNameError] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [fileError, setFileError] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous errors
    setFullNameError('');
    setEmailError('');
    setPasswordError('');
    setAgencyNameError('');
    setExperienceError('');
    setFileError('');

    // Basic form validation using regex
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let hasError = false;

    if (!nameRegex.test(fullName)) {
      setFullNameError('Please enter a valid Full Name (only letters and spaces are allowed).');
      hasError = true;
    }

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid Email address.');
      hasError = true;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('Please enter a valid Password (minimum eight characters, at least one letter and one number).');
      hasError = true;
    }

    if (role === 'agent') {
      if (agencyName.trim() === '') {
        setAgencyNameError('Please enter Agency Name.');
        hasError = true;
      }

      if (isNaN(experience) || parseInt(experience) <= 0) {
        setExperienceError('Please enter a valid Experience (a positive number).');
        hasError = true;
      }
    }

    if (!selectedFile) {
      setFileError('Please select a file.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Form is valid, submit the form
    console.log('Form Submitted');
  };

  return (
    <div>
      <div className="signup_container">
        <img
          alt="students"
          src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        />
        <form onSubmit={handleSubmit} className="form-group">
          <h1>SignUp</h1>
          <input type="text" className="input-field" id="name" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {fullNameError && <p className="error">{fullNameError}</p>}

          <input type="text" className="input-field" placeholder="youremail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="error">{emailError}</p>}

          <input type="password" className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p className="error">{passwordError}</p>}

          <div className="role-container">
            <div className="role">
              <input
                type="radio"
                id="role-user"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-user">User</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="role-agent"
                name="role"
                value="agent"
                checked={role === 'agent'}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-agent">Travel Agent</label>
            </div>
          </div>

          {role === 'agent' && (
            <>
              <input type="text" className="input-field" placeholder="Agency Name" value={agencyName} onChange={(e) => setAgencyName(e.target.value)} />
              {agencyNameError && <p className="error">{agencyNameError}</p>}

              <input type="number" className="input-field" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
              {experienceError && <p className="error">{experienceError}</p>}

              <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
             {fileError && <p className="error">{fileError}</p>}

            </>
          )}

      

          <button type="submit" className="submit">
            Sign Up
          </button>

          {/* Always show the login option */}
          <p>
            Already a user or agent? <a href="">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
