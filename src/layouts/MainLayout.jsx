import React from 'react';
import { Layout } from 'antd';
import CustomHeader from '../components/Headers/CustomHeader';
import CustomContent from '../components/Contents/CustomContent';
import CustomFooter from '../components/Footers/CustomFooter';

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <CustomHeader />
      <CustomContent>{children}</CustomContent>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;
