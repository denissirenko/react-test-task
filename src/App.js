import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/header/AppHeader';
import { AppFooter } from './components/footer/AppFooter';
import { AppRoutes } from './AppRoutes';

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="App">
      <AppHeader />
      <Content className="main-wrap">
        <AppRoutes />
      </Content>
      <AppFooter />
    </Layout>
  );
}
