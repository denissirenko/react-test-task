import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 50,
  paddingInline: 0,
  lineHeight: '50px',
  backgroundColor: '#7dbcea',
};

export const AppHeader = () => {
  return (
    <Header style={headerStyle}>
      <div className="container">
        <Link style={{ color: '#fff' }} to="/">
          Header
        </Link>
      </div>
    </Header>
  );
};
