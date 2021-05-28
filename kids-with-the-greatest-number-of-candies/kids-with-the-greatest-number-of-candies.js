/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies){
    let greatestNumber = Math.max(...candies)
    let answer = [];
    for (let i = 0; i < candies.length; i++){
        if ((candies[i] + extraCandies) >= greatestNumber){
            answer.push(true)
        }
        else{
            answer.push(false);
        }
        candies[i] += 1;
    }
    return(answer);
}