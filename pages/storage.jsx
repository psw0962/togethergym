import { useEffect } from 'react';
import supabase from '@/config/supabaseClient';
import { useState } from 'react';

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/videos/`;
const Storage = () => {
  const [data, setData] = useState(null);

  const getItems = async () => {
    let result = [];
    const { data } = await supabase.storage.from('videos').list();

    data.forEach((x, index) => {
      result.push({ id: index, url: `${URL}${x.name}` });
    });

    return result;
  };

  useEffect(() => {
    try {
      console.log(getItems().then(res => setData(res)));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onChangeInputFile = async event => {
    console.log(event.target.files[0]);

    const { data, error } = await supabase.storage
      .from('videos')
      .upload(`/${event.target.files[0].name}`, event.target.files[0], {
        cacheControl: '3600',
        upsert: false,
      });
  };

  return (
    <div>
      <input
        type="file"
        onChange={e => {
          onChangeInputFile(e);
        }}
      />

      {/* {data &&
        data?.map(x => {
          return (
            <div key={x.id}>
              <video
                src={x?.url}
                poster="/png/logo.png"
                width="200"
                height="200"
                loop={true}
                autoPlay={true}
                muted={true}
                preload="auto"
                playsInline
              ></video>
            </div>
          );
        })} */}
    </div>
  );
};

export default Storage;
