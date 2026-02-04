function calcBill(prices, items) {
    let itemCount = {};

    // first I need to know quantity of each item then the price happens
    for (const item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item] = 1;
        }
    }

    // this part is calcuilating price multiplying with the quantity
    let total = 0;
    for (const item in itemCount){
        let price = prices[item];
        let quantity = itemCount[item];
        let totalPriceWithQuantity = price * quantity;
        total += totalPriceWithQuantity;
    }

    return {
        total,
        itemCount
    }
}

prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

console.log(calcBill(prices, items));
