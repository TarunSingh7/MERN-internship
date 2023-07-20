const number=[10,10,5,5];
/*function sum(numbers){
    const output=0;
    for(let i=0;i<numbers.length;i++ ){
        output+=numbers[i];
    }
    return output;
}//*/
const sum=number.reduce((accumulator,currentNumbers)=>{
    return accumulator+currentNumbers},0);
console.log(sum);
const mul=number.reduce((accumulator,currentNumbers)=>{return accumulator*currentNumbers},1);
console.log(mul);

var transactions=[
{
    type: "income",amount:1000},
    {
        type: "expenses",amount:400},
        {
            type: "income",amount:5000},
            {
                type: "exepenses",amount:1000},
                {
                    type: "income",amount:1200},


];
function calculateBalance(transactions){
    var output=0;
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].type ==='income'){
            output += transactions.amount
        }
        else{
            output-=transactions.amount
        }
    }
    console.log(output);
    return output;
}
transactions.reduce((accumulator,current)=>{if()})


