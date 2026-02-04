function calcBill(prices, items) {
    let total = 0;
    let itemCount = {};

    for (const item in prices){
        let price = prices[item];
        total += price;
    }

    for (const item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item] = 1;
        }
    }

    return {
        total,
        itemCount
    }
}

prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

console.log(calcBill(prices, items));
