import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSizes, getProduct } from './../../services/api';
import { Typography, Button, Spin, Select, Alert } from 'antd';
import { AppSlider } from './CatalogSlider';
const { Title } = Typography;

export const CatalogItem = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [sizeSelected, setSizeSelected] = useState(null);
  const navigate = useNavigate();
  const [color, setColor] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('colors');
  });

  useEffect(() => {
    getSizes().then((sizes) => {
      setSizes(sizes);
    });
  }, []);

  useEffect(() => {
    getProduct(Number(id))
      .then((product) => setProduct(product))
      .catch((error) => setError(error.message));
  }, [id, color]);

  const updateColor = (value) => {
    setColor(value);
    window.history.replaceState(null, '', `?colors=${value}`);
    setSizeSelected(null);
  };

  const CurrentProduct = product?.colors?.find((item) => item.id === Number(color));
  const OtherProduct = product?.colors?.filter((item) => item.id !== Number(color));

  const ProductJSX = CurrentProduct ? (
    <>
      <Title>{product.name}</Title>
      <div style={{ maxWidth: 350 }}>
        <AppSlider images={CurrentProduct.images} />
      </div>
      <p style={{ marginTop: 30 }}>{CurrentProduct.description}</p>
      {sizes && (
        <Select
          placeholder="Select size"
          value={sizeSelected}
          style={{
            width: 120,
            marginBottom: 15,
          }}
          options={sizes.map((size) =>
            CurrentProduct.sizes.includes(size.id)
              ? { ...size, value: size.label }
              : { ...size, disabled: true },
          )}
          onChange={(value) => {
            setSizeSelected(value);
          }}
        />
      )}
      <div className="other-color-block">
        <p>Available colors:</p>
        <div className="other-color-wrap">
          {OtherProduct.map((item) => (
            <div className="other-color-item" onClick={() => updateColor(item.id)} key={item.id}>
              <div className="other-color">
                <img src={item.images[0]} alt={item.name} />
                <div>{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>{Math.ceil(CurrentProduct.price)} $</p>
    </>
  ) : (
    <Spin className="spin-loader" size="large" tip="Loading..." />
  );

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Alert message={error} type="error" />
        <Button style={{ marginTop: 30 }} onClick={() => navigate('/')} type="primary">
          Back to home page
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button style={{ marginBottom: 20 }} onClick={() => navigate('/')} type="primary">
        Back
      </Button>
      {ProductJSX}
    </>
  );
};
