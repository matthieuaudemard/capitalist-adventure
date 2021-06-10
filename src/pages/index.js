import React, { useState } from 'react';
import Index from '../components/money-barre';

import ManagerList from '../components/manager-list';
import UnlockButton from '../components/unlock-button';

const managers = [{
  name: 'banana',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/bananas-icon.png',
  price: 1,
  total: 0,
  totalCostFactoryUnit: 2.65,
  level: 1,
  unlocked: true,
  unlockPricing: 0
}, {
  name: 'apple',
  img: 'https://icons.iconarchive.com/icons/martin-berube/food/256/apple-icon.png',
  price: 5,
  total: 0,
  totalCostFactoryUnit: 4.35,
  level: 1,
  unlocked: false,
  unlockPricing: 50
}, {
  name: 'lemon',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/lemon-icon.png',
  price: 10,
  total: 0,
  totalCostFactoryUnit: 7.65,
  level: 1,
  unlocked: false,
  unlockPricing: 70
}, {
  name: 'grape',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/blueberries-icon.png',
  price: 20,
  total: 0,
  totalCostFactoryUnit: 9.65,
  level: 1,
  unlocked: false,
  unlockPricing: 120
}, {
  name: 'pear',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/pear-icon.png',
  price: 30,
  total: 0,
  totalCostFactoryUnit: 12.65,
  level: 1,
  unlocked: false,
  unlockPricing: 150
}];

const game = {
  money: 0,
  managers
};

const Page = () => {
  const [money, setMoney] = useState(game.money);
  const [nextItem, setNextItem] = useState(managers.find((m) => !m.unlocked));
  return (
    <div className="container">
      <Index amount={money} />
      <ManagerList money={money} setMoney={setMoney} game={game} />
      <UnlockButton
        money={money}
        setMoney={setMoney}
        item={nextItem}
        setItem={setNextItem}
        managers={game.managers}
      />
    </div>
  );
};

export default Page;
