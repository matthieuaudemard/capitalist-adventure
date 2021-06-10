import React, { useState } from 'react';

const Manager = ({ money, setMoney, manager }) => {
  const [total, setTotal] = useState(manager.total);
  const [level, setLevel] = useState(manager.level);
  const [price, setPrice] = useState(manager.price);
  const [totalCostFactoryUnit, setTotalCostFactoryUnit] = useState(manager.totalCostFactoryUnit);
  const { name, img } = manager;

  const computePercentage = () => ((money * 100) / totalCostFactoryUnit).toFixed(0);

  let percentage = computePercentage();

  const sell = () => {
    setMoney(money + price);
    setTotal(total + price);
    percentage = computePercentage();
  };

  const update = () => {
    if (money < totalCostFactoryUnit) {
      return;
    }
    setLevel(level + 1);
    setMoney(money - totalCostFactoryUnit);
    percentage = computePercentage();
    setPrice(price + 1);
    setTotalCostFactoryUnit(totalCostFactoryUnit * (level + 1));
  };

  return (
    <div className="card col-4 m-1 p-2">
      <div className="row">
        <div className="col-4">
          <button type="button" onClick={sell}>
            <img src={img} className="shadow p-1 bg-danger rounded-circle img-fluid" alt={name} />
            <span className="badge badge-light">{level}</span>
          </button>
          <span>{`$ ${price}`}</span>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <div>
                <h1 className="display-6">{`$ ${total}`}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="progress col-10">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`${percentage}%`}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div role="button" onClick={update} tabIndex={0} onKeyPress={update}>
                <h1 className="display-6">{`$ ${totalCostFactoryUnit.toFixed(2)}`}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManagerList = ({ money, setMoney, game }) => (
  <div className="row col justify-content-between">
    {
      game
        .managers
        .filter((manager) => manager.unlocked)
        .map((manager) => <Manager money={money} setMoney={setMoney} manager={manager} />)
    }
  </div>
);

export default ManagerList;
