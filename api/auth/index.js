import { auth } from 'utils/firebase';

export const getUser = () => {
  return new Promise(resolve => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      const result = user || null;
      unsubscribe();
      resolve({ result });
    });
  });
};
