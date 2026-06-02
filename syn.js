const ids=[1,2,3,4,5];
async function fetchSequentily(){
    for(const id of ids){
        
        const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data= await res.json();
        console.log(data.id);
    }
}
fetchSequentily();
