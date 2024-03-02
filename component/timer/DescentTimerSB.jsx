import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Font from '@/component/common/font';
import togetherlogo from '@/public/png/togetherlogo.png';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import Image from 'next/image';
import { usePatchFlagData } from '@/api/flag';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'node_modules/next/router';

const DescentTimerSB = ({ flag, setFlag, section }) => {
  const router = useRouter();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { mutate } = usePatchFlagData();

  useEffect(() => {
    const countdown = setInterval(() => {
      // ========================= 1R =========================
      if (flag?.flag_number === 76) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 75) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flag_number === 74) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 73) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flag_number === 72) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 71) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flag_number === 70) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '4set',
              next: '4set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 69) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '4set 휴식',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flag_number === 68) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 67) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flag_number === 66) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 65) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flag_number === 64) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 63) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flag_number === 62) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '8set',
              next: '8set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 61) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '1ROUND',
              current: '8set 휴식',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flag_number === 60) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '1ROUND',
              current: '9set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flag_number === 59) {
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
              flag_number: flag?.flag_number - 1,
              timer: 90,
              round: '1ROUND',
              current: '수분 충전!🚰💧',
              next: '2ROUND',
            };
          });
        }
      }

      // ========================= 2R =========================

      if (flag?.flag_number === 58) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 57) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flag_number === 56) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 55) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flag_number === 54) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 53) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flag_number === 52) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '4set',
              next: '4set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 51) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '4set 휴식',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flag_number === 50) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 49) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flag_number === 48) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 47) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flag_number === 46) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 45) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flag_number === 44) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '8set',
              next: '8set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 43) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '2ROUND',
              current: '8set 휴식',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flag_number === 42) {
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
              flag_number: flag?.flag_number - 1,
              timer: 40,
              round: '2ROUND',
              current: '9set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flag_number === 41) {
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
              flag_number: flag?.flag_number - 1,
              timer: 90,
              round: '2ROUND',
              current: '수분 충전!🚰💧',
              next: '3ROUND',
            };
          });
        }
      }

      // ========================= 3R =========================

      if (flag?.flag_number === 40) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 39) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flag_number === 38) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 37) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flag_number === 36) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 35) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flag_number === 34) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '4set',
              next: '4set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 33) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '4set 휴식',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flag_number === 32) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 31) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flag_number === 30) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 29) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flag_number === 28) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 27) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flag_number === 26) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '8set',
              next: '8set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 25) {
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
              flag_number: flag?.flag_number - 1,
              timer: 15,
              round: '3ROUND',
              current: '8set 휴식',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flag_number === 24) {
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
              flag_number: flag?.flag_number - 1,
              timer: 30,
              round: '3ROUND',
              current: '9set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flag_number === 23) {
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
              flag_number: flag?.flag_number - 1,
              timer: 90,
              round: '3ROUND',
              current: '수분 충전!🚰💧',
              next: '4ROUND',
            };
          });
        }
      }

      // ========================= 4R =========================

      if (flag?.flag_number === 22) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 21) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flag_number === 20) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 19) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag?.flag_number === 18) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 17) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag?.flag_number === 16) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '4set',
              next: '4set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 15) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '4set 휴식',
              next: '5set',
            };
          });
        }
      }

      if (flag?.flag_number === 14) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 13) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag?.flag_number === 12) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 11) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag?.flag_number === 10) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 9) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag?.flag_number === 8) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '8set',
              next: '8set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 7) {
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
              flag_number: flag?.flag_number - 1,
              timer: 10,
              round: '4ROUND',
              current: '8set 휴식',
              next: '9set',
            };
          });
        }
      }

      if (flag?.flag_number === 6) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '4ROUND',
              current: '9set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag?.flag_number === 5) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '4ROUND',
              current: '수분 충전!🚰💧',
              next: '5ROUND',
            };
          });
        }
      }

      // ========================= 5R =========================

      if (flag?.flag_number === 4) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '5ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag?.flag_number === 3) {
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
              flag_number: flag?.flag_number - 1,
              timer: 20,
              round: '5ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag?.flag_number === 2) {
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
              flag_number: flag?.flag_number - 1,
              timer: 60,
              round: '5ROUND',
              current: '2set',
              next: 'DONE!',
            };
          });
        }
      }

      if (flag?.flag_number === 1) {
        if (parseInt(flag?.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag?.timer - 1,
            };
          });
        }

        if (parseInt(flag?.timer) === 0) {
          mutate({ type: 'playProgram', newValue: false });

          setFlag({
            flag_number: 76,
            timer: 10,
            round: '1ROUND',
            current: '준비!',
            next: '1set',
          });
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [flag?.flag_number, flag?.timer]);

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

            <ProgressWrapper>
              <Font color="#fff" fontSize="8rem">
                {section}
              </Font>

              <Font color="red" fontSize="12rem">
                {flag?.current}
              </Font>

              <Font color="#fff" fontSize="5rem">
                NEXT ➡️ {flag?.next}
              </Font>
            </ProgressWrapper>

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
          </TitleContainer>
        </Container>
      </Frame>
    </div>
  );
};

export default DescentTimerSB;

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
    stroke: ${props => (props.timer <= 3 ? 'red' : '#fff')};
  }
  .CircularProgressbar-trail {
    stroke: gray;
  }
  .CircularProgressbar-text {
    font-weight: 700;
    fill: ${props => (props.timer <= 3 ? 'red' : '#fff')};
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
