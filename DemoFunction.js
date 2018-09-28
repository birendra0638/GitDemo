function add(a,b){
	return a+b;
}

console.log(add(10,20));

var a=4;
var b=["a","b","c","d","e","f"];
//var b=[1,2,3,4,5];
for(var i=0;i<b.length;i++){
	console.log(b[i]);
}

var FirstName="Vikash ";//String literal declaration

console.log(FirstName.charAt(5));

var FullName=FirstName.concat("singh");

console.log(FullName);

console.log(FullName.indexOf("a"));

//slice method first index is included but ending index excluded. 

console.log(FullName.slice(1, 5));

console.log(FullName.toUpperCase());

console.log(FirstName.trim())

var lastName=new String("Singh");//String Object declaration