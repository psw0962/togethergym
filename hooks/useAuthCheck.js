import { useEffect, useState } from 'react';

const useAuthCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      if (localStorage.getItem('sb-pickvaiiskvmynzynbcg-auth-token') === null) {
        setIsLoggedIn(false);

        return;
      }

      if (localStorage.getItem('sb-pickvaiiskvmynzynbcg-auth-token')) {
        setIsLoggedIn(true);

        return;
      }
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return isLoggedIn;
};

export default useAuthCheck;
