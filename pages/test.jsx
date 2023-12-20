import { useGetPrograms } from '@/api/index';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from 'utils/firebase';

const Test = () => {
  const [textText, setTextText] = useState('');

  // const { data } = useGetPrograms();
  // console.log(data);

  return (
    <div>
      <div>test</div>

      <input type="text" onChange={e => setTextText(e.target.value)} />
    </div>
  );
};

export default Test;
