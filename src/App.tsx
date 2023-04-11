import React from 'react';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {StoryDetail, StoriesList} from '@/pages';
import {Layout} from '@/components/layout';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {theme} from "@/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<StoriesList />} />
                <Route path="story/:storyId" element={<StoryDetail />} />
                <Route
                  path="*"
                  element={
                    <p>
                      Page Not found. Go to <Link to="/">Stories list</Link>
                    </p>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
