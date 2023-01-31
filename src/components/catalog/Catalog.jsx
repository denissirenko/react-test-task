import { useState, useEffect } from 'react';
import { getProducts } from './../../services/api';
import { CatalogCard } from './CatalogCard';
import { Typography, Spin } from 'antd';
const { Title } = Typography;

export const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, [products]);

  const CardJsx = products.map(({ id, colors, name }) =>
    colors.map((item) => <CatalogCard key={item.id} productId={id} productName={name} {...item} />),
  );

  return (
    <>
      <Title>Catalog</Title>
      {products.length ? (
        <div className="cards-list">{CardJsx}</div>
      ) : (
        <Spin className="spin-loader" size="large" tip="Loading..." />
      )}
    </>
  );
};
