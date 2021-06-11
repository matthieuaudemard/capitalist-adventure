import React, { useState } from 'react';
import './product-list.css';
import Manager from './manager';

const Product = ({ money, setMoney, product }) => {
  const { name, img } = product;
  const [total, setTotal] = useState(product.total);
  const [level, setLeveL] = useState(product.level);
  const [price, setPrice] = useState(product.price);
  const [upgradeCost, setUpgradeCost] = useState(product.upgradeCost);

  const computePercentage = () => {
    const value = (money * 100) / upgradeCost;
    return value > 100 ? 100 : value;
  };

  let percentage = computePercentage();

  const sellItem = () => {
    setMoney(money + price);
    setTotal(total + price);
    percentage = computePercentage();
  };

  const handleClickSellItem = () => {
    if (product.managerHired) {
      return;
    }
    sellItem();
  };

  const upgradeItem = () => {
    setLeveL(level + 1);
    setPrice(price + 1);
    setMoney(money - upgradeCost);
    setUpgradeCost(+(upgradeCost * (level + 1)).toFixed(2));
  };

  return (
    <div className="col-4 mb-4">
      <div className="p-1">
        <div className="row col m-0 p-0 mb-1 justify-content-between align-items-center">
          <button type="button" className="btn btn-product" onClick={handleClickSellItem}>
            <img src={img} alt={name} className="image-parent d-block mr-3" />
          </button>
          <div className="price-badge">
            <span className="badge badge-pill badge-primary">{`$ ${price}`}</span>
          </div>
          <Manager money={money} setMoney={setMoney} product={product} sellItem={sellItem} />
        </div>

        <div className="alert alert-secondary d-flex justify-content-between" role="alert">
          <div className="level">{`lvl ${level}`}</div>
          <div className="text-right">{`$ ${total}`}</div>
        </div>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="invisible">{`${percentage.toFixed(0)}%`}</span>
          </div>
        </div>
        <button type="button" disabled={upgradeCost > money} className="btn btn-primary btn-block" onClick={upgradeItem}>{` Next upgrade ($ ${upgradeCost})`}</button>
      </div>
    </div>
  );
};

const ProductList = ({ money, setMoney, products }) => (
  <div className="row col justify-content-start mt-5">
    { products
      .filter((p) => p.unlocked)
      .map((p) => <Product money={money} setMoney={setMoney} product={p} />) }
  </div>
);

export default ProductList;
