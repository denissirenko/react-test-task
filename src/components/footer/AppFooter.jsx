import { Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export const AppFooter = () => {
  return <Footer style={footerStyle}>© {new Date().getFullYear()} Copyright Text</Footer>;
};
