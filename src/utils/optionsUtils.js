export const calculateProfitLoss = (option, priceAtExpiry) => {
  const { strike_price, type, long_short } = option;
  let profitLoss;

  if (type === "Call") {
    // For a call option, calculate profit/loss for long and short positions.
    profitLoss = long_short === "long"
      ? Math.max(0, priceAtExpiry - strike_price) - (option.ask)
      : Math.min(0, strike_price - priceAtExpiry) + (option.bid);
  } else if (type === "Put") {
    // For a put option, calculate profit/loss for long and short positions.

    profitLoss = long_short === "long"
      ? Math.max(0, strike_price - priceAtExpiry) - (option.ask)
      : Math.min(0, priceAtExpiry - strike_price) + (option.bid);
  }

  return profitLoss;
};
// Generates the data for the risk & reward graph.

export const generateGraphData = (options) => {
  const prices = [];
  const profits = [];
  // Generate profit/loss data for a range of prices.

  for (let price = 50; price <= 150; price += 1) {
    let totalProfit = 0;
    // Sum the profit/loss for each option at the current price.

    options.forEach(option => {
      totalProfit += calculateProfitLoss(option, price);
    });

    prices.push(price);
    profits.push(totalProfit);
  }

  return {
    labels: prices,
    datasets: [
      {
        label: 'Profit/Loss',
        data: profits,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
};
// Calculates the maximum profit, maximum loss, and break-even points for the options strategy.

export const calculateSummary = (options) => {
  let maxProfit = -Infinity;
  let maxLoss = Infinity;
  const breakEvenPoints = [];
  // Calculate profit/loss for a range of prices to determine summary statistics.

  for (let price = 50; price <= 150; price += 1) {
    let totalProfit = 0;
    // Sum the profit/loss for each option at the current price.
    options.forEach(option => {
      totalProfit += calculateProfitLoss(option, price);
    });
    // Update max profit and max loss.

    if (totalProfit > maxProfit) maxProfit = totalProfit;
    if (totalProfit < maxLoss) maxLoss = totalProfit;
    // Identify break-even points where profit/loss is approximately zero.

    if (Math.abs(totalProfit) < 1) breakEvenPoints.push(price);
  }

  return { maxProfit, maxLoss, breakEvenPoints };
};
