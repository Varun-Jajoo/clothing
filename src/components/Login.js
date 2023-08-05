import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { usernameContext } from './Signup';
const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const name = useContext(usernameContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.token);
        history('/home'); // Replace '/dashboard' with the desired redirect path
        dispatch({ type: 'user', payload: true });
      } else {
        throw new Error(json.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Invalid credentials');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (<>
    
        <div className='drawop' style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <form onSubmit={handleSubmit} className="form" style={{ margin: '13vh auto', maxWidth: '35vw' }}>
        <div className="title1">
          {`Welcome,`}
          <br />
          <span>login to continue</span>
        </div>
        <input type="email" placeholder="Email" name="email" className="input" onChange={onChange} />
        <input type="password" placeholder="Password" name="password" className="input" onChange={onChange} />
        <button className="button-confirm" type="submit">
          Let's go →
        </button>
      </form>
    </div>
      
    </>
  );
};

export default Login;
