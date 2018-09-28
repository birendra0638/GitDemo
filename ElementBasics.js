describe('protractor Element Demo',function(){
	var obj=require("./elementBasics2.js");
	var dataobj=require("./data.js");
	
	console.log(dataobj.datadrive.firstinput);
	
	beforeEach(function() {
		obj.getUrl();
	  });
	
	it('Testing Calculator App',function(){
		//browser.waitForAngularEnabled(false);
		//browser.get("http://google.com");

		
		obj.firstInput.sendKeys(dataobj.datadrive.firstinput);
		obj.secondInput.sendKeys(dataobj.datadrive.secondinput)
		obj.goButton.click();
		
		expect(obj.result.getText()).toBe(dataobj.datadrive.result);
			obj.result.getText().then(function(text){
				console.log(text);
				
			})

		
		
		
		/*.then(function(){
			browser.sleep(5000);
		})*/

	})
	
	 afterEach(function() {
		    console.log("Test Completed")
		  });
})