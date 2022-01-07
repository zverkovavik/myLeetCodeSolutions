var maxProfit = function(prices) {
    let counter = 0;
    prices.forEach((element, index) => {
        let count = prices[index + 1] - element;
        if (count > 0) {
            counter += count;
        }
    });
    return counter;
};
