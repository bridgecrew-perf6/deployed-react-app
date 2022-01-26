import React, { FC } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const SiderR = styled(Layout.Sider)`
  overflow: 'auto';
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;
export const Sider: FC = ({ ...props }) => {
  return (
    <SiderR>
      <div className='logo' />
    </SiderR>
  );
};
