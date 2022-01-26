import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from '../pages/Homepage/HomePage';
import { Sider } from '../components/Sider/index';
import { Layout } from 'antd';

export const AppRouter: FC = ({ ...props }) => {
  return (
    <Layout hasSider>
      <Sider />
      <Layout style={{ marginLeft: 200 }}>
        <Layout.Content style={{ overflow: 'initial' }}>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </Layout.Content>
      </Layout>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
};
