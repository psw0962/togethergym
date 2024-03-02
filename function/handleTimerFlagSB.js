const handleTimerFlagSB = async (timerMethod, setLocalStorageState) => {
  if (timerMethod === 'basicTimer') {
    setLocalStorageState({
      flagNumber: 72,
      timer: 10,
      round: '1ROUND',
      current: '준비!',
      next: '1set',
    });

    return;
  }

  if (timerMethod === 'descentTimer') {
    setLocalStorageState({
      flagNumber: 76,
      timer: 10,
      round: '1ROUND',
      current: '준비!',
      next: '1set',
    });

    return;
  }
};

export default handleTimerFlagSB;
