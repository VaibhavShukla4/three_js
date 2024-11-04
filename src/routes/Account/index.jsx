/** @format */

import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;