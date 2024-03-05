import { useGetUserData } from '@/api/auth';
import supabase from '@/config/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/videos/`;

const Upload = () => {
  const router = useRouter();
  const [toastState, setToastState] = useRecoilState(toastStateAtom);
  const { data: userData, error: useDataError } = useGetUserData(
    setToastState,
    router,
    false,
  );

  const onChangeInputFile = async event => {
    if (useDataError) return alert('로그인 후 이용해 주세요.');

    for (let i = 0; i < event.target.files.length; i++) {
      const { data, error } = await supabase.storage
        .from('videos')
        .upload(
          `${event.target.files[i].name}${uuidv4()}`,
          event.target.files[i],
          {
            cacheControl: '3600',
            upsert: false,
          },
        );

      await supabase
        .from('videos')
        .insert([{ id: data.id, url: `${URL}${data.path}` }])
        .select();
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="mov"
        onChange={e => {
          onChangeInputFile(e);
        }}
      />
    </div>
  );
};

export default Upload;
