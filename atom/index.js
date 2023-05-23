import { atom } from 'recoil';

export const timerMethodStateAtom = atom({
  key: 'timerMethodState',
  default: 'basic',
});

export const confirmMonitorCountStateAtom = atom({
  key: 'confirmMonitorCountState',
  default: 'single',
});
