describe("Chain Locator",function(){
	it("Open angularjs website",function(){
		browser.get("https://juliemr.github.io/protractor-demo/");
		// New locator :repeater,Chain Locators and css for identical element.
		element(by.model("first")).sendKeys("12");
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.model("second")).sendKeys("15");
		element(by.id("gobutton")).click();
		
		
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			//to fetch text and print we need to resolve the promise.
			console.log(text);
		})
		
	})
})