
let str='walking';

function Verbing(str){

let i=str.length;
if(i>=3){
    if(str[i-3]=='i' && str[i-2]=='n' && str[i-1]=='g'){
        str=str+'ly';
        return str;
    }else{
        str=str+'ing';
        return str;
    }

}
}
console.log(Verbing(str));


