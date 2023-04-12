import {useQuery} from 'react-query';
import {fetchStory} from '@/api/api';
import {useSnackbar} from 'notistack';
import {AxiosError} from 'axios';

export const useStory = (id: number) => {
  const {enqueueSnackbar} = useSnackbar();

  return useQuery({
    queryFn: () => fetchStory(id),
    queryKey: ['story', id],
    onError: err => {
      if (err instanceof AxiosError) {
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      }
    },
  });
};
