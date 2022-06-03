import React, { memo } from 'react';
import { Outlet } from 'umi';


const BasicWrapper = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default memo(BasicWrapper);
