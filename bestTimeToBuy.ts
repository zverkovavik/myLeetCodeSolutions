/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. */

function maxProfit(prices: number[]): number {
    let counter: number = 0;
    prices.forEach((element, index) => {
        let count: number = prices[index + 1] - element;
        if (count > 0) {
            counter += count;
        }
    });
    return counter;
};
