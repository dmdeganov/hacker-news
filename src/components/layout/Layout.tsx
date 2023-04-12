import React from 'react';
import {Link, Outlet, ScrollRestoration} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h2>Hacker News</h2>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
