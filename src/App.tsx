import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  ScrollRestoration,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {StoryDetail, StoriesList} from '@/pages';
import {Layout} from '@/components/layout';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {theme} from '@/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <StoriesList />,
      },
      {
        path: 'story/:storyId',
        element: <StoryDetail />,
      },
      {
        path: '*',
        element: (
          <p>
            Page Not found. Go to <Link to="/">Stories list</Link>
          </p>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
