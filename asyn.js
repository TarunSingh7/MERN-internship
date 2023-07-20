async function fetchdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const data={naam:'King',age:24};
            resolve(data);

        },2000);

    });
}
async function getData(){
    try{
        const data=await fetchdata();
        console.log(data);
    }catch(error){
        console.error(error);

    }
}
getData();
