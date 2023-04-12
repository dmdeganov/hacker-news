import React from 'react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <h2>Hacker News</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
