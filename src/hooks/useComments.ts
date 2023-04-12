import {useQuery} from 'react-query';
import {fetchComments} from '@/api/api';
import {useSnackbar} from 'notistack';
import {AxiosError} from 'axios';

export const useComments = (ids: number[], enabled  = true) => {
  const {enqueueSnackbar} = useSnackbar();

  return useQuery({
    queryFn: () => fetchComments(ids),
    queryKey:['comments', ...ids],
    enabled: enabled && ids.length > 0,
    onError: err => {
      if (err instanceof AxiosError) {
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      }
    },
  });
};
