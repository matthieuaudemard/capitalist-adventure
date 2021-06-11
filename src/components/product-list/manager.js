import React, { useEffect, useState } from 'react';

const Manager = ({
  money, setMoney, product, sellItem
}) => {
  const { managerImg, managerHiringCost } = product;
  const [managerHired, setManagerHired] = useState(product.managerHired);
  const [activeTime, setActiveTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (managerHired) {
        sellItem();
        setManagerHired(true);
        setActiveTime(activeTime + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [managerHired, activeTime]);

  const hireManager = () => {
    if (managerHired || money < managerHiringCost) {
      return;
    }
    setMoney(money - managerHiringCost);
    setManagerHired(true);
  };
  return (
    <div className="row col m-0 p-0 justify-content-end">
      <button disabled={!managerHired && money < managerHiringCost} type="button" className="btn btn-product pr-0" onClick={hireManager}>
        <img src={managerImg} alt="manager" className={`image-parent ${managerHired ? 'shadow p-1 bg-danger rounded-circle' : ''}`} />
        <div className="hiring-cost-badge">
          <span className="badge badge-pill badge-primary">{!managerHired ? `$${managerHiringCost}` : `${Math.floor((activeTime % 3600) / 60)}:${Math.floor(activeTime % 3600 % 60)}`}</span>
        </div>
      </button>
    </div>
  );
};

export default Manager;
