import React from 'react';

const UnlockButton = ({ money, setMoney, managers }) => {
  let item = managers.find((m) => !m.unlocked);

  const unlockItem = () => {
    if (money < item.unlockPricing) {
      return;
    }
    item.unlocked = true;
    setMoney(money - item.unlockPricing);
    item = managers.find((m) => !m.unlocked);
  };

  if (item) {
    return (
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={unlockItem}
        >
          {`Nouveau produit (${item.unlockPricing})`}
        </button>
      </div>
    );
  }
  return (
    <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button">Tous les produits ont été débloqués</button>
    </div>
  );
};

export default UnlockButton;
