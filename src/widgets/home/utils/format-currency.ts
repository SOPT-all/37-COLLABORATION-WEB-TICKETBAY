export const formatCurrency = (value: number | string) => {
  const numberValue = Number(value);
  return numberValue.toLocaleString("ko-KR");
};
