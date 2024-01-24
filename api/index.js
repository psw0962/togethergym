import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  QueryClient,
} from 'react-query';
import { db } from 'utils/firebase';

const getPrograms = async () => {
  const snapshot = await db?.collection('together_current').get();
  const documents = snapshot?.docs[0].data().data;

  return documents;
};

export const useGetPrograms = () => {
  return useQuery(['programs'], () => getPrograms(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true,
    staleTime: 1000 * 60 * 5,
  });
};
