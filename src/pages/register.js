import React, { useState } from 'react';
import { auth } from './config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isRegistering) {
        // Register a new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setMessage(`Welcome ${userCredential.user.email}, registration successful!`);
      } else {
        // Log in an existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setMessage(`Hello ${userCredential.user.email}, you are logged in!`);
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleAuth}>
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>

        {message && <p className="auth-message">{message}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>

        <p className="toggle-auth">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? ' Login' : ' Register'}
          </span>
        </p>
      </form>
    </div>
  );
}
