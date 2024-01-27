import React, { useEffect, useState } from 'react';
import { storage } from 'utils/firebase';

const Test = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoList = async () => {
      try {
        // Storage에서 동영상 목록 가져오기
        const listRef = storage.ref('videos');
        const res = await listRef.listAll();

        const videoArray = await Promise.all(
          res.items.map(async item => {
            const url = await item.getDownloadURL();
            return {
              name: item.name,
              url: url,
            };
          }),
        );

        setVideos(videoArray);
      } catch (error) {
        console.error('Error getting video list: ', error);
      }
    };

    fetchVideoList();
  }, []);

  return (
    <div>
      <div>
        <ul>
          {videos.slice(0, 3).map((video, index) => {
            console.log(video.url);

            return (
              <li key={index}>
                <video
                  src={video?.url}
                  poster="/png/logo.png"
                  width="200"
                  height="200"
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  preload="auto"
                  playsInline
                ></video>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Test;
