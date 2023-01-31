import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { AppSlider } from './CatalogSlider';
const { Meta } = Card;

export const CatalogCard = (props) => {
  const { id, name, images, price, description, productId, productName } = props;
  return (
    <Card hoverable>
      <Link to={`/catalog/${productId}?colors=${id}`}>
        <AppSlider images={images} />
        <Meta style={{ marginTop: 30 }} title={productName} description={description} />
        <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Color: {name}</p>
        <p style={{ marginTop: 10, color: '#000', fontWeight: 500 }}>{Math.ceil(price)} $</p>
      </Link>
    </Card>
  );
};
