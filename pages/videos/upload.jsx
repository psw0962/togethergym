import { useRef } from 'react';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { upload } from '@/public/svg/index';
import Image from 'next/image';
import { usePatchUploadVideosData } from '@/api/videos';
import DotSpinner from '@/component/common/dot-spinner';

const Upload = () => {
  const router = useRouter();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { mutate, isLoading } = usePatchUploadVideosData(setToastState, router);

  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* 로딩 처리 */}
      {isLoading ? (
        <DotSpinner>
          업로드 용량에 따라 몇 분 이상 소요될 수 있습니다. 탭을 닫지 마세요.
        </DotSpinner>
      ) : null}

      <input
        style={{ display: 'none' }}
        type="file"
        multiple
        accept=".mov"
        ref={fileInputRef}
        onChange={event => {
          mutate({ event });
        }}
      />
      <Frame>
        <Image
          src={upload}
          width={50}
          height={50}
          alt="upload"
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />

        <UploadBtn onClick={handleButtonClick}>업로드</UploadBtn>
      </Frame>
    </div>
  );
};

export default Upload;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 30rem;
  margin-top: 15rem;
  border: 2px dashed #cacaca;
  border-radius: 10px;
`;

const UploadBtn = styled.button`
  background-color: #114684;
  color: #fff;
  margin-top: 1rem;
  padding: 2rem 4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
`;
