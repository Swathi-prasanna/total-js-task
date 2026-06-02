const people=[{name:'Ali',city:'HYD'},
    {name:'Sara',city:'MUM'},
    {name:'Raj',city:'HYD'},
];
const grouped=Object.groupBy(people,(item)=>item.city);
console.log(grouped);