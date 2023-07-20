const x='abba';
const len=x.length;
for(let i=0;i<len/2;i++){
    if(x[i]!=x[len-1-i]){
        console.log("string is not palindrome");
    }
}
    console.log("string is palindrome");
    

