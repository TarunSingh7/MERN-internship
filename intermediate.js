// const listofFruits=["a","o","b"]
// listofFruits.map(pieces)

const radius=[3,4,8,9,12]
function circum(r){
     
    return ((2*3.14)*r);

}
 function area(r){
return 3.14*r*r;
 }
 function diameter(r){
return 2*r;
 }
 const arr1=radius.map(circum);
 const arr2=radius.map(area);
 const arr3=radius.map(diameter);
 console.log(arr1);
 console.log(arr2);
 console.log(arr3);