import supabase from '@/config/supabaseClient';
import { useEffect } from 'react';
import { useState } from 'react';
import { PROGRAM_CATEGORY } from '@/constant/program-category';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useGetUserData } from '@/api/auth';

const Videos = () => {
  const router = useRouter();
  const [toastState, setToastState] = useRecoilState(toastStateAtom);
  const { data: userData, error: useDataError } = useGetUserData(
    setToastState,
    router,
    false,
  );

  const [data, setData] = useState(null);

  const getVideos = async () => {
    let { data: videos, error } = await supabase.from('videos').select('*');
    setData(videos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleOnChangeSelect = async (event, x) => {
    if (useDataError) return alert('로그인 후 이용해 주세요.');

    const { error } = await supabase
      .from('videos')
      .update({ category: event.target.value })
      .eq('id', x.id)
      .select();
  };

  const onClickDelete = async x => {
    if (useDataError) return alert('로그인 후 이용해 주세요.');

    const { error: tableError } = await supabase
      .from('videos')
      .delete()
      .eq('id', x.id);

    const { error: storageError } = await supabase.storage
      .from('videos')
      .remove([x.url.split('videos/')[1]]);
  };

  return (
    <div>
      {data &&
        data.map(x => {
          return (
            <div key={x.id}>
              <select
                id="category"
                name="category"
                defaultValue={x.category}
                onChange={e => handleOnChangeSelect(e, x)}
              >
                {PROGRAM_CATEGORY.map(x => {
                  return (
                    <option key={x} value={x.category}>
                      {x}
                    </option>
                  );
                })}
              </select>

              <video
                src={x.url || ''}
                poster="/png/logo.png"
                width="200"
                height="200"
                loop={true}
                autoPlay={true}
                muted={true}
                preload="auto"
                playsInline
              ></video>

              <div
                style={{ fontSize: '3rem', marginTop: '2rem' }}
                onClick={() => onClickDelete(x)}
              >
                삭제
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Videos;
