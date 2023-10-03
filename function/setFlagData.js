import { realTimeDB } from 'utils/firebase';

const setFlagData = setFlag => {
  const timerMethodRef = realTimeDB?.ref('/timerMethod');
  timerMethodRef.on('value', snapshot => {
    const timerMethodValue = snapshot.val();

    if (timerMethodValue === 'basicTimer') {
      setFlag({
        flagNumber: 72,
        timer: 10,
        round: '1ROUND',
        current: '준비!',
        next: '1set',
      });
    }

    if (timerMethodValue === 'descentTimer') {
      setFlag({
        flagNumber: 76,
        timer: 10,
        round: '1ROUND',
        current: '준비!',
        next: '1set',
      });
    }
  });
};

export default setFlagData;
