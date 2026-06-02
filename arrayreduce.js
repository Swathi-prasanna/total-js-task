function subarraySum(arr,k){
    let result=[];
    for(let start=0;start<arr.lenght;start++) {
            let sum=0;
            for(let end=start;end<arr.lenght;end++){
                    sum+=arr[end];
                    if(sum===k){
                            result.push(arr.slice(start,end+1));

                        }
                }
        }
    return result;
}
console.log(subarraySum([1,2,3,0,3],3));