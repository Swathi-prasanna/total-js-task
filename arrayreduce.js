Array.prototype.myReduce= function(fn,init){
        let acc;
        let start;
        if(init!==undefined){
                acc=init;
                start=0;
        }
        else{
                if(this.length===0){
                        throw new
                        TypeError("Reduce of empty array");

                }
                acc=this[0];
                start=1;
        }
        for(let i=start;i<this.length;i++){
                if(this[i]!==undefined){
                        acc=fn(acc,this[i]);
                }
        }
        return acc;
};
console.log([1,2,3].myReduce((acc,x)=>acc+x));
console.log([].myReduce((a,b)=>a+b));