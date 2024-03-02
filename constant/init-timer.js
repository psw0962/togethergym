const InitTimer = type => {
  let result;

  if (type === 'basicTimer') {
    result = {
      timer_method: 'basicTimer',
      play_program: false,
      flag_number: 72,
      timer: 10,
      round: '1ROUND',
      current: '준비!',
      next: '1set',
    };
  }

  if (type === 'descentTimer') {
    result = {
      timer_method: 'descentTimer',
      play_program: false,
      flag_number: 76,
      timer: 10,
      round: '1ROUND',
      current: '준비!',
      next: '1set',
    };
  }

  return result;
};

export default InitTimer;
