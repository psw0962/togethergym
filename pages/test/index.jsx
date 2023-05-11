import React, { useEffect, useState } from 'react';
import { db, storage } from 'utils/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const Test = () => {
  const [videoUrl1, setVideoUrl1] = useState('');
  const [videoUrl2, setVideoUrl2] = useState('');
  const [videoUrl3, setVideoUrl3] = useState('');

  useEffect(() => {
    const storageRef = firebase.storage().ref();

    const videoRef1 = storageRef.child('IMG_6793.mp4');
    videoRef1.getDownloadURL().then(url => {
      setVideoUrl1(url);
    });

    const videoRef2 = storageRef.child('IMG_6794.mp4');
    videoRef2.getDownloadURL().then(url => {
      setVideoUrl2(url);
    });

    const videoRef3 = storageRef.child('IMG_6795.mp4');
    videoRef3.getDownloadURL().then(url => {
      setVideoUrl3(url);
    });
  }, []);

  return (
    <div>
      <video
        src={videoUrl1}
        poster="/png/logo.png"
        width={400}
        height={750}
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      <video
        src={videoUrl2}
        poster="/png/logo.png"
        width={400}
        height={750}
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      <video
        src={videoUrl3}
        poster="/png/logo.png"
        width={400}
        height={750}
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      {/* {videos.map(x => {
        return (
          <>
            <video
              src={videoUrl}
              poster="/png/logo.png"
              width={400}
              height={750}
              loop={true}
              autoPlay={true}
              muted={true}
            ></video>
          </>
        );
      })} */}
    </div>
  );
};

export default Test;
