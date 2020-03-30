function largestSubarraySum(array) {
    let sum = 0
    let highestSum = 0

    // for (let i = 0; i < array.length; i++){
    //     sum += array[i]
    //     if (sum > highestSum){
    //         highestSum = sum
    //     }
    // }
    // return highestSum

    array.forEach(num => {
        if (sum + num < 0){
            sum = 0 
        }else {
            sum += num
            if (sum > highestSum){
                highestSum = sum
            }
        }
    })
    return highestSum
}