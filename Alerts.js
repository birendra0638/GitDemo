describe("How to play with Alerts", function() {
	
	
	it("Open Non Angularjs webSite Alerts", function() {
		
		//To working with  non Angularjs website 
		browser.waitForAngularEnabled(false);
		
		browser.get("http://www.qaclickacademy.com/practice.php");
		element(by.id("confirmbtn")).click();
		//switch to  alert
		browser.switchTo().alert().dismiss();
		
	})
})