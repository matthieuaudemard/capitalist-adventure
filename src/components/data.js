const products = [{
  name: 'banana',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/bananas-icon.png',
  price: 1,
  total: 0,
  upgradeCost: 2.65,
  level: 1,
  unlocked: true,
  unlockPricing: 0,
  managerImg: 'https://www.pngrepo.com/png/20920/180/man.png',
  managerHiringCost: 1,
  managerHired: false
}, {
  name: 'apple',
  img: 'https://icons.iconarchive.com/icons/martin-berube/food/256/apple-icon.png',
  price: 5,
  total: 0,
  upgradeCost: 4.35,
  level: 1,
  unlocked: false,
  unlockPricing: 50,
  managerImg: 'https://www.pngrepo.com/png/125662/180/woman.png',
  managerHiringCost: 100,
  managerHired: false
}, {
  name: 'lemon',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/lemon-icon.png',
  price: 10,
  total: 0,
  upgradeCost: 7.65,
  level: 1,
  unlocked: false,
  unlockPricing: 70,
  managerImg: 'https://www.pngrepo.com/png/60396/180/man.png',
  managerHiringCost: 100,
  managerHired: false
}, {
  name: 'grape',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/blueberries-icon.png',
  price: 20,
  total: 0,
  upgradeCost: 9.65,
  level: 1,
  unlocked: false,
  unlockPricing: 120,
  managerImg: 'https://www.pngrepo.com/png/129236/180/man.png',
  managerHiringCost: 100,
  managerHired: false
}, {
  name: 'pear',
  img: 'https://icons.iconarchive.com/icons/iconicon/veggies/256/pear-icon.png',
  price: 30,
  total: 0,
  upgradeCost: 12.65,
  level: 1,
  unlocked: false,
  unlockPricing: 150,
  managerImg: 'https://www.pngrepo.com/png/49899/180/man.png',
  managerHiringCost: 100,
  managerHired: false
}];

const initialMoney = 0;

export {
  products,
  initialMoney
};
