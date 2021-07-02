export const convertFromPrivatToNormal = (arr) => {
    const res = {};
    const USD = arr[0];
    const EUR = arr[1];
    const RUR = arr[2];
    res[USD.ccy] = USD.buy;
    res[EUR.ccy] = EUR.buy;
    res[RUR.ccy] = RUR.buy;
    return res;
};
