const currencyFormatter = (currencyType: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyType,
  });
};

export default currencyFormatter;
