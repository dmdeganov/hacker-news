import {useQuery} from 'react-query';
import {fetchStories} from '@/api/api';
import {useSnackbar} from 'notistack';
import {AxiosError} from "axios";

export const useStoriesList = () => {
  const {enqueueSnackbar} = useSnackbar();

  return useQuery({
    queryFn: fetchStories,
    queryKey: 'stories',
    refetchInterval: 1000* 60,
    staleTime: 1000* 60,
    onError: err => {
      if (err instanceof AxiosError) {
        console.log('enqueueSnackbar shows message')
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      }
    },
  });
};

