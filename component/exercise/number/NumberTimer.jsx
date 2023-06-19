import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Font from '@/component/common/font';
import togetherlogo from '@/public/png/togetherlogo.png';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import Image from 'next/image';
import { useRouter } from 'node_modules/next/router';

const NumberTimer = ({ flag, setFlag }) => {
  const router = useRouter();
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram');

  useEffect(() => {
    const countdown = setInterval(() => {
      // 시작
      if (flag?.flagNumber === 72) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 71) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flagNumber === 70) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 69) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flagNumber === 68) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 67) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flagNumber === 66) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 65) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flagNumber === 64) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 63) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flagNumber === 62) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 61) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flagNumber === 60) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 59) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flagNumber === 58) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 57) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flagNumber === 56) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 55) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag?.flagNumber === 54) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 53) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag?.flagNumber === 52) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 51) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag?.flagNumber === 50) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '12set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flagNumber === 49) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 150,
              round: '1ROUND',
              current: '수분 충전!🚰💧',
              next: '2ROUND',
            };
          });
        }
      }

      if (flag?.flagNumber === 48) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 47) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flagNumber === 46) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 45) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flagNumber === 44) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 43) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flagNumber === 42) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 41) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flagNumber === 40) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 39) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flagNumber === 38) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 37) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flagNumber === 36) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 35) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flagNumber === 34) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 33) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flagNumber === 32) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 31) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag?.flagNumber === 30) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 29) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag?.flagNumber === 28) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 27) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag?.flagNumber === 26) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '12set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flagNumber === 25) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 150,
              round: '2ROUND',
              current: '수분 충전!🚰💧',
              next: '3ROUND',
            };
          });
        }
      }

      if (flag?.flagNumber === 24) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 23) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flagNumber === 22) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 21) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flagNumber === 20) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 19) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flagNumber === 18) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 17) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flagNumber === 16) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 15) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flagNumber === 14) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 13) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flagNumber === 12) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 11) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flagNumber === 10) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag?.flagNumber === 9) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flagNumber === 8) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 7) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag?.flagNumber === 6) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 5) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag?.flagNumber === 4) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag?.flagNumber === 3) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag?.flagNumber === 2) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag?.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '12set',
              next: 'DONE!',
            };
          });
        }
      }

      if (flag?.flagNumber === 1) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          window.location.reload();
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [flag?.flagNumber, flag?.timer]);

  return (
    <div>
      <audio
        style={{ display: 'none' }}
        controls
        src="/sounds/beep.mp3"
      ></audio>

      <Frame>
        <Container>
          <TitleContainer>
            <TitleWrapper>
              <ImageWrapper width={30} height={30}>
                <Image
                  src={togetherlogo}
                  alt="logo"
                  priority={true}
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  width={180}
                  height={200}
                />
              </ImageWrapper>
            </TitleWrapper>

            {playProgram && (
              <ProgressWrapper>
                <Font fontSize="8rem">
                  {router?.pathname?.split('/')[3]}ROUND
                </Font>

                <Font color="blue" fontSize="12rem">
                  {flag?.current}
                </Font>

                <Font fontSize="5rem">NEXT ➡️ {flag?.next}</Font>
              </ProgressWrapper>
            )}

            {playProgram && (
              <ProgressBar
                timer={flag?.timer}
                style={{ width: 300, height: 300 }}
              >
                <CircularProgressbar
                  value={flag?.timer}
                  text={`${flag?.timer}`}
                  maxValue={60}
                  strokeWidth={15}
                />
              </ProgressBar>
            )}
          </TitleContainer>
        </Container>
      </Frame>
    </div>
  );
};

export default NumberTimer;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProgressBar = styled.div`
  .CircularProgressbar-path {
    stroke: ${props => (props.timer <= 3 ? 'red' : 'blue')};
  }
  .CircularProgressbar-trail {
    stroke: gray;
  }
  .CircularProgressbar-text {
    fill: ${props => (props.timer <= 3 ? 'red' : 'blue')};
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
