
//forEach()
var num = [1,2,3,4,5]

num.forEach(function(n,index,item){
	console.log(index,n,item);
})

// map()
var map = num.map(function(n,item){
	return n + 1;
})

console.log(map);