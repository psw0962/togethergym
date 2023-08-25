import React, { useState, useEffect } from 'react';
import { auth, firebaseAuth } from 'utils/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogIn = async (email, password) => {
    auth
      .setPersistence(firebaseAuth.Auth.Persistence.SESSION)
      .then(() => {
        auth.signInWithEmailAndPassword(email, password);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogOut = () => {
    return auth?.signOut();
  };

  useEffect(() => {
    const checkLogin = auth?.onAuthStateChanged(user => {
      if (user) {
        console.log(user?.email);
      } else {
        console.log(user);
      }
    });

    return () => checkLogin();
  }, []);

  return (
    <div>
      <form>
        <input type="text" onChange={e => setEmail(e.target.value)} />
        <input
          type="password"
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
        />
      </form>

      <button onClick={() => handleLogIn(email, password)}>로그인</button>
      <button onClick={() => handleLogOut(email, password)}>로그아웃</button>
    </div>
  );
};

export default Login;
