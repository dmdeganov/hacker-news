import {useQuery} from 'react-query';
import {fetchStory} from '@/api/api';
import {useSnackbar} from 'notistack';
import {AxiosError} from 'axios';

export const useStory = (id: number) => {
  const {enqueueSnackbar} = useSnackbar();

  return useQuery({
    queryFn: () => fetchStory(id),
    queryKey: ['story', id],
    staleTime: 1000 * 60,
    onError: err => {
      if (err instanceof AxiosError) {
        console.log('enqueueSnackbar shows message');
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      }
    },
  });
};
