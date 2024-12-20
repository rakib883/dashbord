const PriceFormat = ({price,className}) => {
  const priceData = new Number(price).toLocaleString("un-us", {
      style: "currency",
      currency: "usd",
      minimumFractionDigits: 2,
  });

  return <span className={className}>{priceData}</span>;
};

export default PriceFormat;


