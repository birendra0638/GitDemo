describe("How to play with Frames", function() {
	
	
	it("Open Non Angularjs webSite Frame", function() {
		
		//To working with  non Angularjs website 
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		browser.driver.manage().window().maximize();
		browser.switchTo().frame("courses-iframe")
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		});
		
	})
})