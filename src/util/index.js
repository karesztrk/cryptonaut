export const localizePrice = (num) => (num ? String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') : '');

export const formatPercentage = (value, decimals = 2) => {
  const mod = decimals !== 0 ? 10 ** decimals : 1;
  return Math.round(value * mod) / mod;
};