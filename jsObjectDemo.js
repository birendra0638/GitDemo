function car()
{
	this.color="red";
	this.engine="turbo";
	this.brand="BMW";
	this.search="by.css('input')";
	this.getModel=function(){
		console.log("this is 2020 model");
	};
	
	};
	//Locally 
var testCar=new car();
	testCar.getModel();
	//globally exposed
	module.exports=new car();
