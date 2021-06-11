import React, { useState } from 'react';
import ProductList from '../components/product-list/index';
import { products, initialMoney } from '../components/data';
import Header from '../components/header';
import UnlockButton from '../components/unlock-button';

const Page = () => {
  const [money, setMoney] = useState(initialMoney);
  return (
    <div>
      <Header money={money} />
      <div className="container">
        <div className="d-flex justify-content-start">
          <ProductList money={money} setMoney={setMoney} products={products} />
        </div>
        <UnlockButton money={money} setMoney={setMoney} products={products} />
      </div>
    </div>
  );
};

export default Page;
