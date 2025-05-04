import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../components/Headers/CustomHeader';
import CustomContent from '../components/Contents/CustomContent';
import CustomFooter from '../components/Footers/CustomFooter';

const MainLayout = () => {
  return (
    <Layout>
      <CustomHeader />
      <CustomContent>
        <Outlet />
      </CustomContent>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;
