import { createSelector } from 'reselect';

const money = (store) => store.money;

export const getCurrencies = createSelector(
    money,
    (money) => money.currencies,
  );
