import { Routes, Route } from 'react-router-dom';
import { Catalog } from './components/catalog/Catalog';
import { CatalogItem } from './components/catalog/CatalogItem';

export const AppRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="catalog/:id" element={<CatalogItem />} />
      </Routes>
    </div>
  );
};
