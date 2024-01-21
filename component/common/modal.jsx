import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { close } from '@/public/svg/index';

const Modal = ({ state, setState, isOverflow, isCenter = true, children }) => {
  const moodalOpenInRef = useRef();
  const modalOpenExceptRef = useRef();
  useOnClickOutside({
    inRef: moodalOpenInRef,
    exceptRef: modalOpenExceptRef,
    handler: () => {
      setState('');
    },
  });

  useEffect(() => {
    if (state) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [state]);

  return (
    <Frame className={state ? 'slideUp' : 'slideDown'}>
      <DialogFrame
        ref={moodalOpenInRef}
        className={state ? 'slideUp' : 'slideDown'}
        isOverflow={isOverflow}
        isCenter={isCenter}
      >
        <div className="close-wrapper">
          <CloseSnsFrame
            width={3}
            height={3}
            pointer={true}
            onClick={() => setState(false)}
          >
            <Image
              src={close}
              alt="close"
              priority={true}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </CloseSnsFrame>
        </div>

        <div>{children}</div>
      </DialogFrame>
    </Frame>
  );
};

export default Modal;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  transition: all 0.2s ease-in-out;

  &.slideUp {
    visibility: visible;
    opacity: 1;
  }

  &.slideDown {
    opacity: 0;
  }
`;

const DialogFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isCenter ? 'center' : '')};

  visibility: hidden;
  position: absolute;
  bottom: -300px;
  width: 100%;
  max-width: 600px;
  max-height: 70rem;
  min-height: 10rem;
  padding: 2rem;
  border-radius: 18px 18px 0px 0px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  z-index: 100;
  overflow-x: ${props => (props.isOverflow ? 'auto' : '')};

  .close-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &.slideUp {
    visibility: visible;
    opacity: 1;
    bottom: 0px;
  }

  &.slideDown {
    opacity: 0;
  }
`;

const CloseSnsFrame = styled(ImageWrapper)`
  border-radius: 100%;
`;
