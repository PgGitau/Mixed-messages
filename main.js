const message = ['Today is a good day', 'Always be Positive!', 'Be happy!!'];
let randNum = Math.floor(Math.random() * 3)
console.log(`The random Number is ${randNum}`)

const displayMsg = (arr) => {
    if (randNum === 0){
        return arr[0];
    }else if (randNum === 1){
        return arr[1];
    }else {
        return arr[2];
    }
}
console.log(displayMsg(message))
