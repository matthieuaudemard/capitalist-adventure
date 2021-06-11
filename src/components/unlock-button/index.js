import React from 'react';

const UnlockButton = ({
  money,
  setMoney,
  products
}) => {
  let product = products.find((p) => !p.unlocked);

  const unlockProduct = () => {
    product.unlocked = true;
    setMoney(money - product.unlockPricing);
    product = products.find((p) => !p.unlocked);
  };

  return product ? (
    <div className="mt-5">
      <button
        disabled={money < product.unlockPricing}
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={unlockProduct}
      >
        {`Unlock next product ($${product.unlockPricing})`}
      </button>
    </div>
  ) : (
    <div>
      <button
        disabled
        type="button"
        className="btn btn-secondary btn-lg btn-block"
      >
        No product left to unlock
      </button>
    </div>
  );
};

export default UnlockButton;
