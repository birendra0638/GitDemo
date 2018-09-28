describe("How to handle Synchronization", function() {
	
	
	it("Open Non Angularjs webSite Frame", function() {
		
		//To working with  non Angularjs website 
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		browser.driver.manage().window().maximize();
		
		element(by.css("a[href*='loadAjax()']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),9000);
		//browser.wait(EC.visibilityOf(element(by.id("results"))),9000);
		element(by.id("results")).getText().then(function(text){
			console.log(text);
		})
		
	})
})