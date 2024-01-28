/**
 * @ARRAYGROUPING
 * Object.groupBy()->
 * Map.groupBy() ->
 * 
 * syntax: Object.groupBy(items, callbackFn)
 * parameters: items (an iterable(such as an array) whose elements will be grouped). callbackFn (a function to execute for each element in the iterable)
 * the function is called with the following arguements -> element(current element being processed), index(index of the current element being processed)
 * 
 */

Object.groupBy = function(arr, func) {
    return arr.reduce((acc, obj) => {
        const key = func(obj);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
};

const stock = [
    { name: "spinach", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
    { name: "brocolli", type: "vegetables", quantity: 10},
  ];
  
const groupBytype = Object.groupBy(stock, (item) => item.type);
   

console.log(groupBytype);

//   const grouped = groupBy(stock, ({ type }) => type);
//   console.log(groupedstock);
// return stock.type;