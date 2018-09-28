describe('protractor Element Demo',function(){
	var obj=require("./elementBasics2.js");
	var dataobj=require("./Data1.js");
	var using=require('jasmine-data-provider');
	
	//console.log(dataobj.datadrive.firstinput);

	beforeEach(function() {
		obj.getUrl();
	});
	
	//data stores actual data
	//description stores sub object name
	//for every iteration one data set is picked.
	using(dataobj.Datadriven, function (data,description) {

		it('Testing Calculator App'+ description,function(){
			//browser.waitForAngularEnabled(false);
			//browser.get("http://google.com");


			obj.firstInput.sendKeys(data.firstinput);
			obj.secondInput.sendKeys(data.secondinput)
			obj.goButton.click();

			expect(obj.result.getText()).toBe(data.result);
			obj.result.getText().then(function(text){
				console.log(text);

			})

			/*.then(function(){
				browser.sleep(5000);
			})*/

		})

	});


	afterEach(function() {
		console.log("Test Completed")
	});
})