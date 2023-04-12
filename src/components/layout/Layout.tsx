import React from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <h2>Hacker News</h2>
      </header>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration/>
    </>
  );
};

export default Layout;
