// Code your solutions in this file
const names =[];
function writeCards(names, event){
    const newArray =[];
    for(let i =0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray[i] = message;
    }
    return newArray;
}
function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }

}