import PocketBase from 'pocketbase';
import { useEffect } from 'react';

const PoketBase = () => {
  const pb = new PocketBase('https://togethergym.pockethost.io');

  useEffect(() => {
    const getPost = async () => {
      try {
        const result = await pb.collection('posts').getFullList({
          sort: '-created',
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
  }, []);

  return <div>asd</div>;
};

export default PoketBase;
