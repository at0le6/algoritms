/*Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. 
Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
For example, assume the bill has the following prices: . Anna declines to eat item  which costs .
If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, 
he should refund  to Anna
https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true.*/
const BonAppeti = (bill, k, b) => {
    const res = bill.filter((e, i) => i != k).reduce((p, c) => p + c) / 2;
    if (res == b) {
        return "Bon Appetit";
    }
    return b - res;
}
console.log(BonAppeti([3, 10, 2, 9], 1, 12))