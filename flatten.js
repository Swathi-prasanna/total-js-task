function flattenDeep(arr) 
{
    const stack=[arr];
    const output=[];
    while(stack.length){
        const value=stack.pop();
        if(Array.isArray(value)){
            for(let item of value){
            stack.push(item);
        }
    }
        
    else{
     output.push(value);  
    }
     }
     return output.reverse();

}
const array1=[1,[2,[3,[4]],5]];

console.log(flattenDeep(array1));
